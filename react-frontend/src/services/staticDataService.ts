// Static data service to replace backend API calls
export interface Color {
  hex: string;
  firstOption: string;
  secondOption: string;
  nFirst: number;
  nSecond: number;
}

export interface ColorJudgement {
  color: string;
  choice: string;
}

export interface Version {
  playVersion: string;
}

class StaticDataService {
  private colors: Color[] = [];
  private isLoaded = false;

  // Load colors from JSON file
  private async loadColors(): Promise<void> {
    if (this.isLoaded) return;

    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/colors.json`);
      this.colors = await response.json();
      this.isLoaded = true;
    } catch (error) {
      console.error('Failed to load colors:', error);
      this.colors = [];
    }
  }

  // Get a random color
  async randomColor(params?: any): Promise<{ body: Color }> {
    await this.loadColors();
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return { body: this.colors[randomIndex] };
  }

  // Get a specific color by hex
  async getColor(params: { color: string }): Promise<{ body: Color }> {
    await this.loadColors();
    const color = this.colors.find(c => c.hex.toLowerCase() === params.color.toLowerCase());
    if (!color) {
      throw new Error(`Color ${params.color} not found`);
    }
    return { body: color };
  }

  // Get color rankings (most controversial first)
  async ranking(params: { limit: number }): Promise<{ body: Color[] }> {
    await this.loadColors();

    // Calculate controversy score - lower score = more controversial (closer to 50/50)
    const sortedColors = [...this.colors]
      .map(color => {
        const total = color.nFirst + color.nSecond;
        if (total === 0) return { ...color, controversy: Infinity }; // No votes = not controversial

        // Calculate how far from 50/50 split (0 = perfect 50/50, higher = more one-sided)
        const firstPercent = color.nFirst / total;
        const distanceFrom5050 = Math.abs(firstPercent - 0.5);

        return {
          ...color,
          controversy: distanceFrom5050
        };
      })
      .sort((a, b) => a.controversy - b.controversy) // Sort by lowest controversy score (closest to 50/50)
      .slice(0, params.limit);

    return { body: sortedColors };
  }

  // Get all colors (hex values only)
  async allColors(params?: any): Promise<{ body: string[] }> {
    await this.loadColors();
    const shuffledColors = [...this.colors].sort(() => Math.random() - 0.5);
    return { body: shuffledColors.map(c => c.hex) };
  }

  // Submit color choice (no-op in static version, but maintain interface)
  async submitChoice(params: { body: ColorJudgement }): Promise<{ body: string }> {
    // In static version, we don't persist choices
    // The controversy scoring is handled in the component via sessionStorage
    console.log('Choice submitted:', params.body);
    return { body: 'OK' };
  }

  // Version info
  async version(params?: any): Promise<{ body: Version }> {
    return { body: { playVersion: 'Static-1.0' } };
  }
}

// Export singleton instance
const staticDataService = new StaticDataService();
export default staticDataService;
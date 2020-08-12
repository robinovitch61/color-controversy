import numpy as np
import matplotlib.pyplot as plt
from colormath.color_objects import LabColor, sRGBColor
from colormath.color_conversions import convert_color

RAINBOW = {
    "R": "red",
    "O": "orange",
    "Y": "yellow",
    "G": "green",
    "B": "blue",
    "P": "pink", # indigo is stupid
    "V": "purple"
}

# Manually chosen...
# Schema: (L, a, b), (option_1, option_2)
CHOICES = (
    ((40, -110, -93), ("B", "G")),
    ((40, -110, -42), ("B", "G")),
    ((40, -110, -25), ("B", "G")),
    ((40, -110, -8), ("B", "G")),
    ((40, -110, 25), ("B", "G")),
    ((40, -93, -59), ("B", "G")),
    ((40, -93, -25), ("B", "G")),
    ((40, -93, 8), ("B", "G")),
    ((40, -76, -25), ("B", "G")),
    ((40, -76, 42), ("B", "G")),
    ((40, -59, -76), ("B", "G")),
    ((40, -59, 76), ("O", "G")),
    ((40, -42, 42), ("O", "G")),
    ((40, -42, 59), ("O", "G")),
    ((40, -25, 76), ("O", "G")),
    ((40, -25, 110), ("O", "G")),
    ((40, -8, 59), ("O", "G")),
    ((40, -8, 93), ("O", "G")),
    ((40, 8, 76), ("O", "G")),
    ((40, 8, 110), ("O", "G")),
    ((40, 25, -93), ("B", "V")),
    ((40, 25, 59), ("O", "G")),
    ((40, 25, 76), ("O", "G")),
    ((40, 25, 93), ("O", "G")),
    ((40, 42, -110), ("B", "V")),
    ((40, 42, -76), ("B", "V")),
    ((40, 42, 42), ("O", "R")),
    ((40, 42, 76), ("O", "R")),
    ((40, 42, 93), ("O", "R")),
    ((40, 59, -93), ("B", "V")),
    ((40, 59, 42), ("O", "R")),
    ((40, 59, 59), ("O", "R")),
    ((40, 59, 76), ("O", "R")),
    ((40, 59, 93), ("O", "R")),
    ((40, 76, -110), ("B", "V")),
    ((40, 76, -76), ("P", "V")),
    ((40, 76, -8), ("R", "P")),
    ((40, 76, 42), ("O", "R")),
    ((40, 76, 59), ("O", "R")),
    ((40, 76, 93), ("O", "R")),
    ((40, 93, -93), ("B", "V")),
    ((40, 93, -76), ("P", "V")),
    ((40, 93, -59), ("P", "V")),
    ((40, 93, -42), ("P", "V")),
    ((40, 93, -25), ("P", "R")),
    ((40, 93, -8), ("P", "R")),
    ((40, 93, 25), ("P", "R")),
    ((40, 93, 42), ("P", "R")),
    ((40, 110, -110), ("B", "V")),
    ((40, 110, -93), ("P", "V")),
    ((40, 110, -76), ("P", "V")),
    ((40, 110, -59), ("P", "V")),
    ((40, 110, -42), ("P", "V")),
    ((40, 110, -25), ("P", "R")),
    ((40, 110, -8), ("P", "R")),
    ((40, 110, 8), ("P", "R")),
    ((40, 110, 25), ("P", "R")),
    ((40, 110, 42), ("P", "R")),
    ((40, 128, -110), ("B", "V")),
)

def get_color_maps():
    '''This function converts CIELAB colors to RGB
    colors for plotting'''
    data = {}
    for L in range(10, 110, 10):
        print(L)
        red = np.empty((256, 256))
        green = np.empty((256, 256))
        blue = np.empty((256, 256))
        for xx, a in enumerate(range(-128, 128)):
            for yy, b in enumerate(range(-128, 128)):
                lab = LabColor(L, a, b)
                rgb = convert_color(color=lab, target_cs=sRGBColor)
                red[yy, xx], green[yy, xx], blue[yy, xx] = rgb.get_value_tuple()

        plot_matrix = np.dstack((np.flipud(red), np.flipud(green), np.flipud(blue)))
        data[L] = plot_matrix
    return data


def plot_maps(data):
    '''This function takes in L -> (RGB_matrices) mappings
    and plots the CIELAB colormap in sRGB'''
    for L, plot_matrix in data.items():
        fig, ax = plt.subplots(figsize=(16, 9))
        ax.imshow(plot_matrix, extent=(-128, 128, -128, 128))
        ax.set_title(f"LAB Colors Plotted in sRGB (L = {L})", fontsize=18)
        ax.set_xlabel("a axis", fontsize=18)
        ticks = np.linspace(-128, 128, 16, dtype=int)
        ax.set_xticks(ticks)
        ax.set_xticklabels(ticks)
        ax.set_yticks(ticks)
        ax.set_yticklabels(ticks)
        ax.set_ylabel("b axis", fontsize=18)
        ax.grid(alpha=0.3)
        plt.show()
        plt.close()


def get_choices():
    '''Parses choices in to RGB + two color options'''
    choices = []
    for choice in CHOICES:
        lab = LabColor(*choice[0])
        rgb = convert_color(color=lab, target_cs=sRGBColor)
        rgb_vals = rgb.get_value_tuple()
        
        first_option = RAINBOW[choice[1][0]]
        second_option = RAINBOW[choice[1][1]]
        choices.append({
            "rgb": rgb_vals,
            "first_option": first_option,
            "second_option": second_option
        })
    return choices
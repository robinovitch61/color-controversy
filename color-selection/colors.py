import numpy as np
import matplotlib.pyplot as plt
from colormath.color_objects import LabColor, sRGBColor, AppleRGBColor
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
    ((50, -116.73304473304478, -26.78210678210678), ("B", "G")),
    ((50, -104.5425685425686, -32.323232323232304), ("B", "G")),
    ((50, -95.30735930735935, -31.58441558441558), ("B", "G")),
    ((50, -89.76623376623382, -22.718614718614702), ("B", "G")),
    ((50, -83.11688311688317, -29.73737373737373), ("B", "G")),
    ((50, -76.09812409812415, -16.06926406926405), ("B", "G")),
    ((50, -69.4487734487735, -24.565656565656553), ("B", "G")),
    ((50, -59.47474747474752, -12.744588744588725), ("B", "G")),
    ((50, -53.19480519480524, -18.655122655122625), ("B", "G")),
    ((50, -53.93362193362199, -1.6623376623376487), ("B", "G")),
    ((50, -55.78066378066384, 9.419913419913428), ("B", "G")),
    ((50, -61.69119769119774, 5.725829725829755), ("B", "G")),
    ((50, -73.1428571428572, 5.725829725829755), ("B", "G")),
    ((50, -76.8369408369409, -3.8787878787878753), ("B", "G")),
    ((50, -87.18037518037522, 3.509379509379528), ("B", "G")),
    ((50, -111.93073593073598, -4.248196248196223), ("B", "G")),
    ((50, -106.02020202020208, 6.464646464646478), ("B", "G")),
    ((50, -97.1544011544012, -1.6623376623376487), ("B", "G")),
    ((50, -121.1659451659452, 2.031746031746053), ("B", "G")),
    ((50, -121.1659451659452, 14.96103896103898), ("B", "G")),
    ((50, -110.4531024531025, 19.02453102453103), ("B", "G")),
    ((50, -100.47907647907653, 13.11399711399713), ("B", "G")),
    ((50, -94.56854256854263, 19.393939393939405), ("B", "G")),
    ((50, -82.7474747474748, 13.11399711399713), ("B", "G")),
    ((50, -73.1428571428572, 27.890331890331908), ("B", "G")),
    ((50, -67.2323232323233, 20.502164502164504), ("B", "G")),
    ((50, -65.38528138528144, 27.890331890331908), ("B", "G")),
    ((50, -89.02741702741707, 32.69264069264071), ("B", "G")),
    ((50, -113.03896103896108, 35.27849927849928), ("B", "G")),
    ((50, -116.73304473304478, -47.46897546897546), ("B", "G")),
    ((50, -87.91919191919197, -41.18903318903317), ("B", "G")),
    ((50, -114.1471861471862, 43.40548340548341), ("B", "G")),
)

def get_color_maps():
    '''This function converts CIELAB colors to RGB
    colors for plotting'''
    data = {}
    for L in range(10, 110, 10):
#     for L in range(60, 70a, 10):
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


def plot_clickable(data, L, c1, c2):
    plot_matrix = data[L]
    fig, ax = plt.subplots(figsize=(16, 9))

    def onclick(event):
        print(f'(({L}, {event.xdata}, {event.ydata}), ("{c1}", "{c2}")),')
    
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

    fig.canvas.mpl_connect('button_press_event', onclick)
    plt.show()

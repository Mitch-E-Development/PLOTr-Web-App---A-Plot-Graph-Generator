import matplotlib.pyplot as plt
import base64
from io import BytesIO
import numpy as np

def bar_plot_generator(title, xLabel, yLabel, xValues, yValues):
    # convert y values to floats
    yValues = list(map(float, yValues.split(',')))
    # Convert x values to strings
    xValues = xValues.split(',')
    # Generate random colors
    colormap = plt.cm.tab10
    num_colors = len(xValues)
    colors = [colormap(i % colormap.N) for i in range(num_colors)]


    # Create the plot
    plt.figure(figsize=(18, 16))
    plt.bar(xValues, yValues, color=colors)
    plt.title(title, fontsize=40, pad=28)
    plt.xlabel(xLabel, fontsize=32, labelpad=30)
    plt.ylabel(yLabel, fontsize=32, labelpad=30)
    plt.xticks(fontsize=26, rotation=45, ha='right')
    plt.yticks(fontsize=26, ha='right')
    plt.grid(True)
    # plt.fill_between(xValues, yValues, color=colors, alpha=0.2)

    plt.ylim(bottom=0)

    # ave the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png', bbox_inches='tight')
    buffer.seek(0)

    # convert the plot to a base64 string
    imgStr = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # close the plot to release memory
    plt.close()

    return imgStr
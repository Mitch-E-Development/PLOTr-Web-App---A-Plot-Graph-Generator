import matplotlib.pyplot as plt
import base64
from io import BytesIO
import numpy as np


def stair_plot_generator(title, xLabel, yLabel, xValues, yValues):
    # Convert y values to floats
    yValues = list(map(float, yValues.split(',')))
    # Convert x values to strings
    xValues = xValues.split(',')
    # Generate random colors
    colors = plt.cm.tab10(np.random.rand())

    # Create the stair plot
    plt.figure(figsize=(18, 16))
    plt.step(xValues, yValues, where='mid')
    plt.title(title, fontsize=40, pad=28)
    plt.xlabel(xLabel, fontsize=32, labelpad=30)
    plt.ylabel(yLabel, fontsize=32, labelpad=30)
    plt.xticks(fontsize=26, rotation=45, ha='right')
    plt.yticks(fontsize=26)
    plt.title(title)
    plt.grid(True)
    plt.fill_between(xValues, yValues, step='mid', color=colors, alpha=0.2)
    plt.ylim(bottom=0)

    # Save the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png', bbox_inches='tight')
    buffer.seek(0)

    # Convert the plot to a base64 string
    imgStr = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # Close the plot to release memory
    plt.close()

    return imgStr
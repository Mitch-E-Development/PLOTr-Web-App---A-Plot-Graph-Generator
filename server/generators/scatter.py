import matplotlib.pyplot as plt
import base64
from io import BytesIO
import numpy as np

def scatter_plot_generator(title, xLabel, yLabel, xValues, yValues):
    # Convert y values to floats
    yValues = list(map(float, yValues.split(',')))

    # Convert x values to strings
    xValues = xValues.split(',')

    # set marker sizes to refelct y value
    markerSizes = yValues

    # Generate random colors
    colormap = plt.cm.tab10
    num_colors = len(xValues)
    colors = [colormap(i % colormap.N) for i in range(num_colors)]

    # Create the scatter plot
    plt.figure(figsize=(18, 16))
    plt.scatter(xValues, yValues, s=markerSizes,  c=colors, cmap='viridis')
    plt.title(title, fontsize=40, pad=28)
    plt.xlabel(xLabel, fontsize=32, labelpad=30)
    plt.ylabel(yLabel, fontsize=32, labelpad=30)
    plt.xticks(fontsize=26, rotation=45, ha='right')
    plt.yticks(fontsize=26)
    plt.grid(True)

    # Set the limits for y-axis to have zero at the bottom
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
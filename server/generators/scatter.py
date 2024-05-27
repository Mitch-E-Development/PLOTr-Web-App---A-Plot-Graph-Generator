import matplotlib.pyplot as plt
import base64
from io import BytesIO
import numpy as np
import random
import matplotlib.colors as mcolors

def scatter_plot_generator(title, xLabel, yLabel, xValues, yValues):
    
    # Convert y values to floats
    yValues = list(map(float, yValues.split(',')))
    # Convert x values to strings
    xValues = xValues.split(',')

    # Normalize the y values
    normalizedY = np.array(yValues) / max(yValues) * 100
    # Determine marker sizes based on normalized y values
    markerSizes = normalizedY * 100  # You can adjust the scaling factor as needed

    # Generate unique random colors
    numColors = len(xValues)
    randColors = []
    while len(randColors) < numColors:
        randColor= mcolors.to_hex((random.random(), random.random(), random.random()))
        if randColor not in randColors:
            randColors.append(randColor)


    # Create the scatter plot
    plt.figure(figsize=(18, 16))
    plt.scatter(xValues, yValues, s=markerSizes,  c=randColors)
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
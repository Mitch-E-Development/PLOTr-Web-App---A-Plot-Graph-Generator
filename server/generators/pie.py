import matplotlib.pyplot as plt
import base64
from io import BytesIO

def pie_plot_generator(title, labels, sizes, colors=None, explode=None):
    # convert sizes to floats
    sizes = list(map(float, sizes.split(',')))

    # Convert x values to strings
    labels = labels.split(',')

    # create the plot
    plt.figure(figsize=(8, 6))
    plt.pie(sizes, 
            labels=labels, 
            colors=colors, 
            explode=explode, 
            autopct='%1.1f%%', 
            startangle=140)
    plt.title(title)
    # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.axis('equal') 
    plt.legend(loc='upper right')

    # save the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    # convert the plot to a base64 string
    imgStr = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # close the plot to release memory
    plt.close()

    return imgStr



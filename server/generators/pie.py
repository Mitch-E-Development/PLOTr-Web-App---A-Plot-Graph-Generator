import matplotlib.pyplot as plt
import base64
from io import BytesIO

def pie_plot_generator(title, labels, sizes):
      # Convert sizes to floats
    sizes = list(map(float, sizes.split(',')))
    # Convert x values to strings
    labels = labels.split(',')
    # Choose a colormap with distinct color groups
    colormap = plt.cm.tab10
    num_colors = len(labels)
    colors = [colormap(i % colormap.N) for i in range(num_colors)]

    # Create the plot
    plt.figure(figsize=(18, 16))
    wedges, _, autotexts = plt.pie(sizes, 
                                   # labels=labels, 
                                   colors=colors, 
                                   autopct='%1.1f%%', 
                                   startangle=140)
     # Increase font size of the percentage labels
    for autotext in autotexts:
        autotext.set_fontsize(28)  # Adjust font size as needed
    plt.title(title, fontsize=40, pad=28)
    # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.axis('equal') 

    # Increase size of legend
    plt.legend(wedges, labels,  loc='center left', bbox_to_anchor=(0.95, 0.9), fontsize=30)

    # save the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png', bbox_inches='tight')
    buffer.seek(0)

    # convert the plot to a base64 string
    imgStr = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # close the plot to release memory
    plt.close()

    return imgStr



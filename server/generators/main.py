from line import line_plot_generator
from bar import bar_plot_generator
from pie import pie_plot_generator
import sys

def main():
    # Extract parameters from command line arguments
    plotType = sys.argv[1]

    # check plot type extract args from command line then execute generator
    if plotType == 'line' or plotType == 'bar':
        title, xLabel, yLabel, xValues, yValues = sys.argv[2:]
        b64Plot = line_plot_generator(title, xLabel, yLabel, xValues, yValues)

    elif plotType == 'bar':
        title, xLabel, yLabel, xValues, yValues = sys.argv[2:]
        b64Plot = bar_plot_generator(title, xLabel, yLabel, xValues, yValues)

    elif plotType == 'pie':
        title, labels, sizes = sys.argv[2:]
        # return labels, sizes, title
        b64Plot = pie_plot_generator(title, labels, sizes)

    elif plotType == 'scatter':
        b64Plot = 'FAKE SCATTER PLOT GENERATED'
    elif plotType == 'stair':
        b64Plot = 'FAKE STAIR PLOT GENERATED'
    else:
        b64Plot = 'PLOT TYPE UNAVAILABLE'      

    # Return the base64 string
    return b64Plot 



if __name__ == "__main__":
    b64PlotImg = main()
    print(b64PlotImg)
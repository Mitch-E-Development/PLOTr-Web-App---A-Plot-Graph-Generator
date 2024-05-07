from generators.plot import generate_plot
from generators.bar import generate_bar_plot



def main():
    plot_type = input("Please select the type of plot your want (line, bar): ")

    if plot_type.lower() == 'line':
        # Get user input for axis labels
        x_label = input("Enter the label for the x-axis: ")
        y_label = input("Enter the label for the y-axis: ")
        # Get user input for axis values
        x_values = input("Enter values for the x-axis separated by spaces: ").split()
        y_values = input("Enter values for the y-axis separated by spaces: ")
        y_values = list(map(float, y_values.split()))
        # Check if the number of y-values matches the number of x-values
        if len(y_values) != len(x_values):
            print("Number of y-values must match the number of x-values.")
            return
        # Generate the plot
        generate_plot(x_label, y_label, x_values, y_values)
        main()

    elif plot_type.lower() == 'bar':
        # Get user input for axis labels
        x_label = input("Enter the label for the x-axis: ")
        y_label = input("Enter the label for the y-axis: ")

        # Get user input for axis values
        x_values = input("Enter values for the x-axis separated by spaces: ").split()
        y_values = input("Enter values for the y-axis separated by spaces: ")
        y_values = list(map(float, y_values.split()))

        # Check if the number of y-values matches the number of x-values
        if len(y_values) != len(x_values):
            print("Number of y-values must match the number of x-values.")
            return

        # Generate the plot
        generate_bar_plot(x_label, y_label, x_values, y_values)
        main()
    
    else:
        print(f'{plot_type} either isnt available or isnt valid. Choose again')
        main()

if __name__ == "__main__":
    main()

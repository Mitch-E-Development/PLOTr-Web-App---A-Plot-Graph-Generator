import matplotlib.pyplot as plt

def generate_bar_plot(x_label, y_label, x_values, y_values):
    # Create the plot
    plt.figure(figsize=(8, 6))
    plt.bar(x_values, y_values)
    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.title('User Generated Plot')
    plt.xticks(rotation=45, ha='right')
    plt.grid(True)
    plt.show()
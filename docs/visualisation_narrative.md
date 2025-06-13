# Visualisation Narrative

Our goal is to demonstrate how indoor environment quality (IEQ) variables change
throughout the day and how this information can aid facilities managers in
understanding occupant comfort. The sample data imitates readings from a set of
IEQ sensors measuring temperature, humidity, air speed, sound level, light level
and other variables. Users can select a variable from the dropdown menu on the
page to see how it evolves over time. The line chart is implemented using
Chart.js and data is loaded via D3.

The page structure and data mapping are intentionally simple so that the focus
remains on exploring the information rather than navigating a complex interface.
In a full system, we would align this data with occupancy or energy consumption
to reveal more insights. We iterated on the first concept by reducing the number
of variables shown simultaneously and opting for a single time-series chart with
a dropdown selector. This keeps the interface clear and encourages comparison
between different measurements.

During development we used ChatGPT to outline the data format and generate the
initial JavaScript structure. The code was then adapted manually to handle
variable switching and to load the local CSV file. The dataset sample was also
manually crafted to mirror typical sensor output.

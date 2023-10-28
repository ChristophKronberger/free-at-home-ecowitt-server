Support my work
====
If you like this project, feel free to buy me a coffee\.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/ckronberg)

Table of contents
=================

<!--ts-->
* [Important information](#important)
* [Installation](#installation)
* [Usage](#usage)
* [Supported Parameters](#supported-parameters)
* [Known issues](#known-issues)
<!--te-->


Important
=========

This addon is in development.

The Work is a work in progress, which is continuously improved by numerous
Contributors. It is not a finished work and may therefore contain defects or
‘bugs’ inherent to this type of development.

For the above reason, the Work is provided under the Licence on an ‘as is’ basis
and without warranties of any kind concerning the Work, including without
limitation merchantability, fitness for a particular purpose, absence of defects
or errors, accuracy, non-infringement of intellectual property rights other than
copyright as stated in Article 6 of this Licence.

Installation
=====
Download a [release](https://github.com/ChristophKronberger/free-at-home-ecowitt-server/releases) from this repository, and upload it to your Free@Home SAP, either with the [CLI](https://busch-jaeger.github.io/free-at-home-addon-development-kit-documentation-preview/deployment/#uploading-the-archive-file-to-the-system-access-point-using-the-command-line) or the [App](https://busch-jaeger.github.io/free-at-home-addon-development-kit-documentation-preview/deployment/#uploading-the-archive-file-to-the-system-access-point-using-the-app-or-browser).


Usage
=====
In the configuration page of the addon, fill in your user credentials (we have used the user "installer"), and define a port on which the server should listen.
Give attention to not take a port which is used by system services or other addons running on your system. We tested with port 5180.
Then set up your weather station to send the data to the free@home system. The path is: http://192.168.1.x/api/weather.
Change the IP address according to your local IP address from your smarthome system.
After receiving the first weather data from your weather station, the addon automatically creates a "virtual weather station" with the channels:
* Wind - Wind speed in m/s
* Rain - Just a boolean. Is it raining or not?
* Brightness - in LUX
* Temperature - Air temperature in °C

You can now assign the virtual weather station to a floor and a room, and set up actions to do when alarms are triggered.


Supported Parameters
====================
The addon development kit does not contain all implementations about parameters which can be set through the UI.
Following parameters are currently supported:
* Wind sensor
  * Wind alert activation level (the scale in Belfort)
* Temperature sensor
  * Temperature alert activation level (frost alert)
* Brightness sensor
  * Brightness alert activation level

Any other value, like alert delay, and de-alert delay, are currently not supported by Busch-Jäger.

Known issues
===========
* If you link a scene to your wind/rain/brightness alarm, it does, according to our experience, nothing. If you link the actors directly, it works like a charm.




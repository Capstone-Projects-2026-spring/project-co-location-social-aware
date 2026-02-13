---
sidebar_position: 1
---

# System Overview

## Project Abstract
This project features a couple different hardware devices that will be used for various different features. These devices are as follows:
1) An AAC (Augmentative and Alternative Communication) device is a tool that helps individuals with communicaton challenges express themselves and communicate to others. AAC devices often take the apperance of a grid-like display in on a tablet device. The usere inputs the words/sentences they wish to express, and the device projects this input outloud. AAC device users constist of individuals whom may be affected by autism, cerebal palsy, affects of strokes, Down syndrome, ALS, or brain injuries. Our project will mainly focus on AAC users affected by autism and Down syndrome. Additionally, our clients will generally be rather young children.
2) A BLE (Bluetooth Low Enegery Device) device is a power efficient, short-range wireless gadget. These devices oftenly connect with smartphones and other devices using periodic data transfers.

This project proposes an AAC grid web app that uses BLE beacons to gain location information about a user. Using this location information, the AAC keyboard will connect the user to other users in the area. With this, AAC device will suggest interests of the users around your location. This will in turn encourage users to socialize, engage in new interests, and possibly facilitate activities that is interesting to other users and themself. 

## Conceptual Design
An existing open source AAC board will be used as the base for this project. For the front facing portion of this web app, including the User Interface and processing interactions, React, JavaScript, HTML, and CSS will be used. For the backend, Python and Djano will be used for authentication and authorization, and SQLite will be used for data management, such as saved lives and interests for each user. This system will work with the BLE beacons to interact with other users.

## Background
Similar products include [TouchChat](https://www.assistiveware.com/products/proloquo4text) and [Proloquo4Text](https://touchchatapp.com/). These are both closed-source products that aim to build a profile for AAC users so they can be more efficient. Co-location socially aware builds a profile which encourages people to interact with other AAC users by suggesting shared interests. TouchChat allows users to create profiles, save settings, and vocabulary, allowing them to switch users quickly. Proloquo4Text also saves profiles, but it saves stored phrases, conversation blocks and does predictions. Co-location socially aware is like these products in that it creates a profile, but this profile saves the users' interests. However, this app also incorporates the unique aspect of Bluetooth low energy beacons letting two users connect, giving them speech suggestions based on their common interests. Co-location socially aware will only be like the other apps in the sense that they have profiles. 

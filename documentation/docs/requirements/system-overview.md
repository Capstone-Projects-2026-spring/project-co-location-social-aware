---
sidebar_position: 1
---

# System Overview

## Project Abstract
This document proposes an AAC keyboard that uses BLE beacons to gain location information about a user. Using this location information, the AAC keyboard will connect the usere to other users in the area. With this, AAC device will suggest interests of the users around your location. This will in turn encourage users to socialize, engage in new interests, and possibly engage in an activity that is interesting to both. 

## Conceptual Design
An existing open source AAC board will be used as the base for this project. For the front facing portion of this web app, including the User Interface and processing interactions, React, JavaScript, HTML, and CSS will be used. For the backend, Python and Djano will be used for authentication and authorization, and SQLite will be used for data management, such as saved lives and interests for each user. This system will work with the BLE beacons to interact with other users.

## Background

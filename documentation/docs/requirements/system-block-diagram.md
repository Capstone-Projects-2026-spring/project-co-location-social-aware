---
sidebar_position: 2
---

# System Block Diagram

**Diagram**
![Diagram showing AAC board interacting with backend and frontend to recommend AAC icons](../../static/img/system-block-diagram.png)

Depicts the central user:
1) Interacting with AAC device
2) Served frontend of our app
3) Device prompted for connection to BLE beacon
4) Backend uses data gathered from beacons to recommend AAC icons to frontend

These 4 components are the central actors that are able to influence and support AAC users to interact with others around them.

The *frontend* will be built in React Native using Expo as a framework to allow for mobile users to easily and efficiently access the app. 

The *backend* will be built in python using the Django framework, this will be ideal for integrating user profile data and accessing information from our beacons and AAC devices.
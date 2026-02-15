---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams. (FINISHED)

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.

# Component Class Diagrams
## Frontend
```mermaid
classDiagram
HomePage <-- Login
HomePage <--> ProfilePage
HomePage <--> BoardPage
AACWord "1" --* "..." BoardPage

class HomePage {
    -navigationContainer: navigator
    -requestBluetooth()
}
class ProfilePage{
    -String: name
    -List: users
    -List: userWordPrefs
    -String: email
    -String: password
    -getUserData()
    -changeUserData()
    +selectUser()
}
class BoardPage{
    +List: sentence
    +AACWord[]: words
    +AACWord[]: recWords
    -playSentence()
    -clickWord()
    -getRecommendedWords()
}
class Login{
    -String: email
    -String: password
    -login()
    +selectUser()
}
class AACWord {
    -AudioRef: sound
    -ImageRef: icon
    -playAudio()
}
```
This component will be built out in React Native, and must meet functional requirements that allow a user to click a word (or more accurately an icon) on the AAC board and hear the sound of that word. A series of these words should then be able to connect into a sentence that can also be played. Other functional requirements that must be met by the frontend include the ability to ***see*** the recommended words, select a user under a specific administrator, update profile (ideally restricted to administrator via login) to include favorite words, and allow navigation for use both with and without bluetooth connection.

## Backend
```mermaid
classDiagram
WordRecommendor --> LocationComparison
WordRecommendor --> UserProfile
BluetoothLocator <-- LocationComparison


class WordRecommendor {
    -String[]: userFavWords
    -String[]: otherFavWords
    -getFavWords(UserProfile) String[]
    -getNearbyUsers()
    -chooseWords(userFavWords, otherFavWords) String[]
}
class BluetoothLocator{
    +int: signalStrength
    -contactBeacon()
}
class LocationComparison{
    -UserProfile[]: nearbyUsers
    -getUserLocation()
    -putUserLocation()
    -getOtherLocations()
    -compareLocations()
}
class UserProfile {
    -String[]: favWords
    -String: email
    -String: password
    -getUserProfile()
    -addUser()
    -changePassword()
}
```

The backend serves other functional purposes, primarily as a driver to access user data such as location (via BluetoothLocator) and profile info (via UserProfile). It is interfacing with our databases at various points to store, access, and change data. This is also primarily where we are selecting the words to recommend comparing different user preferences. This choice is then served to the frontend, which displays the socially aware words in a special container.

# Use-Case Sequence Diagrams
## Use Case 1: Admin Profile
![Admin Profile Sequence Diagram](diagrams/uc1.png)

## Use-Case 2: Student Account Creation
![Student Account Creation Sequence Diagram](diagrams/uc2.png)

## Use-Case 3: Student Log-in
![Student Log-in Sequence Diagram](diagrams/uc3.png)

## Use-Case 4: 1-on-1 Social Interaction
![1-on-1 Sequence Diagram](diagrams/uc4.png)

## Use-Case 5: Relatability
![Relatability Sequence Diagram](diagrams/uc5.png)

## Use-Case 6: Group Interaction
![Group Interaction Sequence Diagram](diagrams/uc6.png)

## Use-Case 7: Setting Goals
![Goal Sequence Diagram](diagrams/uc7.png)







# shoutout-service-db

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build shoutout-service-db` to build the library.

## Running unit tests

Run `nx test shoutout-service-db` to execute the unit tests via [Jest](https://jestjs.io).

## Data story

### Tables

User
Colleague
Nomination
? something else ?

### Relations

Nominations have 1 or more colleagues
Reverse relation?
A user has a corresponding colleagueentry representing them. This allows them to see their historical nominations.

### Inserting

When creating a nomination through the web ui I expect to be able to nominate multiple people at once for the same thing.
This would create a batch insert of multiple nominations.
Each nomination record would have the same data for reason, beTheExpert etc. but would have a different colleague id associated with it.

Is it possible to generate a new insert id or nomination number whenever submitting these group nominations?
Then each of these group nominations could be neatly grouped together.
Maybe every nomination submitted by the UI (grouped or otherwise) would need a nomination id.

### Querying

### Reporting

We want to use this to simplify the end of year reporting for Alison.
What would she most benefit from? I should ask her really.

Currently we have awards at pebblefest for this stuff, but that's in julyish so the querying wouldn't be as simple as "Everything from 2024". The UI might need a date range picker of sorts to filter the nominations.

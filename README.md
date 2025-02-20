# Chapeaux Catalog
Web Asset Catalog Server

## Description
The idea behind the asset catalog was to provide a single place (or API) where developers, designers, and even content authors could find canonical sources for assets from across the enterprise. Want to know where the corporate logo comes from on the home page? Really like that card component and want to use it on your new app?

Building on the foundation of a variety of web standards, the Chapeaux Catalog will allow asset creators to modify additional information about their assets as well as provide the ability to host documentation and usage details or just link out to those things at a canonical source.

## Goals
* Centralized web asset discovery
* Searchable by typical terms, but also locations used (URLs)
* Reportable by usage or other measures
* Subscribe functionality for curated notifications (updates, deprecation, security, etc.)
* Opt-in AND smart crawled asset retrieval and cataloging
* Tight integration with Chapeaux Delivery for canonical sources

## Architecture
* [Data](#data) - Resource Description Framework (RDF) graph (oxigraph server)
* [Application](#application) - Deno + Rust
* [UI](#ui) - Patternfly Elements and other pattern libraries
* [Auth](#auth) - SolidOIDC

## Features
* Documentation aggregation
* "Live" asset display
* Opt-in curation and editing
* More...

## Web Assets
* Web Components
* Images
* Styles
* Scripts
* Media

## Use cases

Financial institution branch teller web interface. Deployed as an app on a remote cluster at each branch. Developer references assets like:
* https://cdn.somebank.com/logo.png
* https://cdn.somebank.com/components.js

Request is made by teller workstation, DNS checks performance tables and sees that the local cluster includes a Chapeaux HEAD Server, routes to the files hosted at the local branch cluster, and serves from there. Logo file was not cached, so HEAD server routes to the global file and caches it. Instead of routing out to the global URL for every asset, the request is handled locally, to improve performance.

![Architecture Diagram](chapeaux-delivery.svg)

## Feature Requests:
* User notifications - ability for people/teams to subscribe and publish notices (deprecation, security, etc.)
* Dependency agnosticism/resolution - (aka Module Spec transforms) script@vX.Y.Z will have correctly versioned dependencies
* Import Map generation
* Vendor bundling
* Minified Builds + sourcemaps
* "Default" files (ala JSDelivr)
* Custom querystring flags (ala ESM.sh; e.g. )
* Custom Headers (e.g. - Deno's X-TypeScript-Types)
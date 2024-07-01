# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- No additions yet

### Fixed

- No Fixes yet

## [1.2.0] - 2024-07-01

Updated dependencies (versions) in package.json
Dropped support for nodejs versions prior 18 see: https://nodejs.org/en/about/releases/
Changed eslint config file to flat
Added eslint settings for vscode (using older eslint version than grunt)
Moved 'old' (conflicting) eslint config files for vscode to .conf/vscode

## [1.1.0] - 2022-02-09

Updated dependencies (versions) in package.json  
Dropped support for nodejs versions prior 12 see: https://nodejs.org/en/about/releases/  
Changed filename gruntfile.js to Gruntfile.js to satisfy build process on gitlabrunner 'image: node:latest' (linux) WTF?! (yes, really)

## [1.0.1] - 2021-09-25

Updated dependencies (versions) in package.json

## [1.0.0] - 2021-07-26

Update to "stable" major version without breaking changes.

### Changed
- README.md changed link to CHANGELOG.md
- moved changelog from docs/ to projects rootdir

## [0.0.4] - 2021-07-26

### Added
- Added tests for option preferwanted
- Added support for check-outdated --prefer-wanted
- Added docs/changelog.md

### Changed
- README.md set link to docs/changelog.md
- package.json set to https://www.slashlib.org/?page_id=429

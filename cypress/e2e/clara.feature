Feature: clara.cc

    Scenario: Select es-mx idiom
    Given access clara.cc
    When select Mexico language
    Then url should contain es-mx
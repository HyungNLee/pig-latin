# Pig Latin Translator

#### Pig Latin Translator Webpage, 8.10.2018

#### By Hyung Lee and Regina N

## Description

A website that translates words and sentences to Pig Latin. Used to practice Behavior-Driven Development

## Specs
* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Input Example: 3
  * Output Example: 3
* The program adds "ay" to single-letter words beginning with a vowel.
  * Input Example: i
  * Output Example: iay
* The program does nothing to single letter consonants.
  * Input Example: p
  * Output Example: p
* The program adds "yay" to the end of words beginning with a vowel.
  * Input Example: iota
  * Output Example: iotayay
* For words starting with a consonant, the program moves all starting consecutive consonants to the end of the word and adds "ay" to the end.
  * Input Example: Pig
  * Output Example: Igpay
* If the first consonants of the word include "q" followed by "u", move both to the end of the word and treat it as a consonant.
  * Input Example: Squeal
  * Output Example: Ealsquay
* The program treats words that start with "y" as a consonant.
  * Input Example: Yellow
  * Output Example: Ellowyay

## Setup/Installation Requirements

* Clone this repository from https://github.com/HyungNLee/leap-year.git
  * jQuery and Bootstrap already included.
* Open up the folder and open up index.html.

## Support and contact details

Hyung Lee - hyungnaelee@gmail.com

## Technologies Used

HTML

CSS

Git

Github

Atom

JavaScript

Bootstrap

jQuery

### License

This software is licensed under the MIT license.

Copyright (c) 2018 **Hyung Lee**

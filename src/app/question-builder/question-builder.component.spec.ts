/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { QuestionBuilderComponent } from './question-builder.component';

describe('Component: QuestionBuilder', () => {
  it('should create an instance', () => {
    let component = new QuestionBuilderComponent();
    expect(component).toBeTruthy();
  });
});

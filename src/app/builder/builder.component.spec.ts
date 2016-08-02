/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BuilderComponent } from './builder.component';

describe('Component: Builder', () => {
  it('should create an instance', () => {
    let component = new BuilderComponent();
    expect(component).toBeTruthy();
  });
});

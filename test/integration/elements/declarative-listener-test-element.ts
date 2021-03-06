/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */

@customElement('declarative-listener-test-element')
class DeclarativeListenerTestElement extends Polymer.DeclarativeEventListeners
(Polymer.Element) {
  @property()
  elementClickCounter: number = 0;

  @property()
  documentClickCounter: number = 0;

  @property()
  windowClickCounter: number = 0;

  @listen('element-event', 'tapRegion')
  elementEventHandler(e: Event) {
    this.elementClickCounter++;
  }

  @listen('document-event', document)
  documentEventHandler(e: Event) {
    this.documentClickCounter++;
  }

  @listen('window-event', window)
  windowEventHandler(e: Event) {
    this.windowClickCounter++;
  }
}

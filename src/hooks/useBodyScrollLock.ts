/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";

let lockCount = 0;

function setBodyOverflow(locked: boolean) {
  if (locked) {
    lockCount++;
    if (lockCount === 1) {
      document.body.style.overflow = "hidden";
    }
  } else {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.style.overflow = "";
    }
  }
}

/**
 * Prevents body scroll when `locked` is true. Uses a reference counter so
 * multiple components can lock/unlock concurrently without clobbering
 * each other's state.
 */
export default function useBodyScrollLock(locked: boolean): void {
  const wasLocked = useRef(false);

  useEffect(() => {
    if (locked && !wasLocked.current) {
      wasLocked.current = true;
      setBodyOverflow(true);
    } else if (!locked && wasLocked.current) {
      wasLocked.current = false;
      setBodyOverflow(false);
    }
  }, [locked]);

  useEffect(() => {
    return () => {
      if (wasLocked.current) {
        wasLocked.current = false;
        setBodyOverflow(false);
      }
    };
  }, []);
}

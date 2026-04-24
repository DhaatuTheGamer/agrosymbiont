import { describe, it, expect } from 'vitest';
import { isEssentialPage } from '../../utils/pwaPatterns';

describe('PWA Pattern Matching', () => {
  it('should match essential pages', () => {
    expect(isEssentialPage('/faq')).toBe(true);
    expect(isEssentialPage('/resources')).toBe(true);
    expect(isEssentialPage('/products')).toBe(true);
  });

  it('should not match non-essential pages', () => {
    expect(isEssentialPage('/')).toBe(false);
    expect(isEssentialPage('/about')).toBe(false);
    expect(isEssentialPage('/contact')).toBe(false);
  });

  it('should match subpages of essential pages', () => {
    expect(isEssentialPage('/products/123')).toBe(true);
    expect(isEssentialPage('/faq/shipping')).toBe(true);
  });
});

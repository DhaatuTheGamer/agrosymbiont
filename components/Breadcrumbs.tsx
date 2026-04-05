
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Breadcrumbs: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = useMemo(() => location.pathname.split('/').filter((x) => x), [location.pathname]);

  const routeNameMap: Record<string, string> = useMemo(() => ({
    'about': t('nav_about'),
    'products': t('nav_products'),
    'technology': t('nav_technology'),
    'stories': t('nav_stories'),
    'resources': t('footer_resources'),
    'blog': t('nav_insights'),
    'contact': t('nav_contact'),
    'careers': t('nav_careers'),
    'faq': t('nav_faq'),
    'privacy-policy': t('footer_privacy'),
    'terms-of-service': t('footer_terms'),
  }), [t]);

  // Don't show breadcrumbs on the home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="w-full z-30 relative mt-24 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">
          <li>
            <Link to="/" className="text-stone-gray/60 dark:text-stone-400 hover:text-cerulean-blue dark:hover:text-blue-400 transition-colors flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean-blue dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900 rounded">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = routeNameMap[value] || value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-stone-gray/30 dark:text-stone-600 mx-2" />
                {isLast ? (
                  <span className="font-semibold text-cerulean-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full" aria-current="page">{name}</span>
                ) : (
                  <Link to={to} className="text-stone-gray/60 dark:text-stone-400 hover:text-cerulean-blue dark:hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean-blue dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900 rounded">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

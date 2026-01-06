"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Map of routes to display names
  const routeNames: Record<string, string> = {
    "/about": "About",
    "/contact": "Contact",
    "/events": "Events",
    "/locations": "Locations",
    "/news": "News",
    "/resource-results": "Resources",
    "/parts-catalog": "Parts Catalog",
    "/case-studies": "Case Studies",
    "/project-map": "Project Map",
    "/technical-faqs": "Technical FAQs",
  };

  // Generate breadcrumb items
  const generateBreadcrumbs = () => {
    const items = [{ name: "Home", path: "/" }];

    if (pathname !== "/" && routeNames[pathname]) {
      items.push({
        name: routeNames[pathname],
        path: pathname,
      });
    }

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-400">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

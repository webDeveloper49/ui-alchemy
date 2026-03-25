import { MENUITEMS } from "../constants/Menu.constants";

type RouteMap = Record<string, string>;

export const getRouteTitleMap = (): RouteMap => {
  const map: RouteMap = {};

  const traverse = (items: any[]) => {
    items.forEach(item => {
      if (item.route && item.label) {
        map[item.route] = item.label;
      }
      if (item.children) {
        traverse(item.children);
      }
    });
  };

  traverse(MENUITEMS);
  return map;
};
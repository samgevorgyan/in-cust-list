import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param products list of elements to search in
   * @param searchItem search string
   * @returns list of products filtered by search text or []
   */
  transform<T extends { name: string }>(
    products: T[],
    searchItem: string
  ): T[] {
    if (!products) {
      return [];
    }
    if (!searchItem) {
      return products;
    }
    searchItem = searchItem.toLocaleLowerCase();

    return products.filter((product) =>
      product.name.toLocaleLowerCase().includes(searchItem)
    );
  }
}

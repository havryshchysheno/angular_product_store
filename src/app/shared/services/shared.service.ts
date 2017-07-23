import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CartItem } from '../../interfaces/cart-item';

@Injectable()
export class SharedService {
    public shopItems: CartItem[] = JSON.parse(localStorage.getItem('shop-cart')) || [];

    constructor(public http: Http) {
    }

    public storeDefaultData(): Promise<CartItem> {
        return new Promise((resolve) => {
            if (!localStorage.getItem('shop-cart')) {
                this.http.get('/assets/data.json')
                    .map((res) => res.json())
                    .first()
                    .subscribe((res) => {
                        resolve(res);
                        localStorage.setItem('shop-cart', JSON.stringify(res));
                        this.shopItems = [...res];
                    });
            } else {
                resolve(true);
            }
        });
    }

    public getData(): CartItem[] {
        return this.shopItems;
    }

    public getItemById(id: number): CartItem {
        let selected = {};
        this.shopItems.forEach((item) => {
            if (item.id === id) {
                selected = item;
            }
        });
        return selected;
    }

    public editItemById(item: CartItem): Promise<CartItem> {
        this.shopItems.forEach((shop, index) => {
            if (shop.id === item.id) {
                this.shopItems[index] = {
                    ...item
                };
            }
        });

        return new Promise((resolve) => {
            localStorage.setItem('shop-cart', JSON.stringify(this.shopItems));
            resolve(item);
        });
    }

    public createItem(item: CartItem): Promise<CartItem> {
        let maxId: number = 1;
        const newItem = item;
        this.shopItems.forEach((shop) => {
            if (shop.id >= maxId) {
                maxId = ++shop.id
            }
        });
        newItem.id = maxId;
        this.shopItems.push(newItem);
        return new Promise((resolve) => {
            localStorage.setItem('shop-cart', JSON.stringify(this.shopItems));
            resolve(newItem);
        });
    }

    public removeItem(item: CartItem): Promise<boolean> {
        let idx;
        this.shopItems.forEach((shop, index) => {
            if (shop.id === item.id) {
                idx = index;
            }
        });
        this.shopItems.splice(idx, 1);

        return new Promise((resolve) => {
            localStorage.setItem('shop-cart', JSON.stringify(this.shopItems));
            resolve(true);
        });
    }

    public loadItemImage(file) {
        return new Promise((resolve) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
        });
    }
}

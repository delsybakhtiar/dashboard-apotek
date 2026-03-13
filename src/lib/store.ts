export type Product = {
  id: string;
  nama: string;
  kategori?: string;
  hargaJual?: number;
  stok?: number;
  stokMinimum?: number;
  // untuk input manual dulu (simple)
  expiryDate?: string; // YYYY-MM-DD (opsional)
};

export type Sale = {
  id: string;
  tanggalISO: string; // ISO string
  total: number;
  metodeBayar?: string;
  catatan?: string;
};

const KEY_PRODUCTS = "apotek_products_v1";
const KEY_SALES = "apotek_sales_v1";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getProducts(): Product[] {
  if (typeof window === "undefined") return [];
  return safeParse<Product[]>(localStorage.getItem(KEY_PRODUCTS), []);
}

export function setProducts(items: Product[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_PRODUCTS, JSON.stringify(items));
}

export function addProduct(p: Omit<Product, "id">) {
  const items = getProducts();
  const newItem: Product = { id: crypto.randomUUID(), ...p };
  setProducts([newItem, ...items]);
}

export function deleteProduct(id: string) {
  const items = getProducts().filter((x) => x.id !== id);
  setProducts(items);
}

export function getSales(): Sale[] {
  if (typeof window === "undefined") return [];
  return safeParse<Sale[]>(localStorage.getItem(KEY_SALES), []);
}

export function setSales(items: Sale[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_SALES, JSON.stringify(items));
}

export function addSale(s: Omit<Sale, "id">) {
  const items = getSales();
  const newItem: Sale = { id: crypto.randomUUID(), ...s };
  setSales([newItem, ...items]);
}

export function deleteSale(id: string) {
  const items = getSales().filter((x) => x.id !== id);
  setSales(items);
}

export function resetAll() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY_PRODUCTS);
  localStorage.removeItem(KEY_SALES);
}

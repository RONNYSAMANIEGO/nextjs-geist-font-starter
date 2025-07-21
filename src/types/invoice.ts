// Tipos para el sistema de facturación
export interface Invoice {
  id: string;
  invoiceNumber: string;
  orderId: string;
  customerId: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    cedula?: string; // Cédula ecuatoriana
    ruc?: string; // RUC para empresas
  };
  businessInfo: {
    name: string;
    ruc: string;
    address: string;
    phone: string;
    email: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  tax: number; // IVA 12% en Ecuador
  discount: number;
  total: number;
  paymentMethod: string;
  status: 'draft' | 'sent' | 'paid' | 'cancelled';
  issueDate: Date;
  dueDate: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceItem {
  productId: string;
  productName: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceSettings {
  businessName: string;
  businessRuc: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  taxRate: number; // 12% IVA en Ecuador
  invoicePrefix: string; // Ej: "FACT-"
  nextInvoiceNumber: number;
}

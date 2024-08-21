// BarcodeScanner.jsx
import React, { useState } from 'react';
import { AddItemContext } from "../UseContext/UseContext";
const BarcodeScanner = ({ onError, onScan }) => {
    const getData = AddItemContext();
    const {
      formData,
      setFormData,
      error,
      handleShow,
      cataroty,
      imagePreview,
      isError,
      Loading,
      suppliers,
      setSuppRes,
      multiSelectRef,
      handleFileChange,
      unitMeasure,fileInputRef
    } = getData;
    const [scannedSku, setScannedSku] = useState('');
    const [productDetails, setProductDetails] = useState(null);

    const products = [
        {
            itemname: 'da-br-mlk-500g',
            name: 'Milk 500g',
            category: 'Dairy',
            brand: 'BrandX',
            price: 50,
            stock: 100,
        },
        {
            itemname: 'VG-OG-CAR-1KG',
            name: 'Carrot 1kg',
            category: 'Vegetables',
            brand: 'Organic',
            price: 30,
            stock: 200,
        },
        // Add more products as needed
    ];

    const [scanning, setScanning] = useState(false);

    const handleScan = (data) => {
        console.log("==================", data);
        if (data) {
            const product = products.find(p => p.itemname === data);
            setScannedSku(data);
            setProductDetails(product);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <div>
            {/* Render barcode scanner UI */}
            <button onClick={() => setScanning(true)}>Start Scanning</button>
            {scanning && (
                <div>
                    {/* Simulate scanning process */}
                    <p>Scanning...</p>
                    {productDetails ? (
                        <div style={{ marginTop: '20px' }}>
                            <h3>Product Details</h3>
                            <p><strong>SKU:</strong> {formData.id}</p>
                            <p><strong>Name:</strong> {formData.description}</p>
                            <p><strong>Category:</strong> {formData.category}</p>
                            <p><strong>Brand:</strong> {formData.manufacturer}</p>
                            <p><strong>Price:</strong> ${formData.unitPrice}</p>
                            <p><strong>Stock:</strong> {formData.initialQuantity} units</p>
                        </div>
                    ) : (
                        scannedSku && <p>No product found for SKU: {scannedSku}</p>
                    )}
                    {/* Simulate scan success with a valid SKU */}
                    <button onClick={() => handleScan(formData.id)}>Simulate Scan Success</button>
                    {/* Simulate scan error */}
                    <button onClick={() => handleError('sample-error')}>Simulate Scan Error</button>
                </div>
            )}
        </div>
    );
};

export default BarcodeScanner;

import jsPDF from "jspdf";
import { getPDFLogoUrl } from "src/components/icons/CommonLogo";

export const drawProductImage = async (doc, x, y) => {
  const shirtWidth = 15;
  const shirtHeight = 20;

  // Use the actual shirt image instead of drawing one
  const shirtImageUrl = "/images/shirtjpeg.jpg";

  try {
    // Add the image to the document
    doc.addImage(shirtImageUrl, "PNG", x, y, shirtWidth, shirtHeight);
  } catch (error) {
    console.error("Error adding shirt image:", error);

    // Fallback to drawing a simplified shirt if image fails to load
    doc.setFillColor(200, 220, 255);
    doc.roundedRect(x, y, shirtWidth, shirtHeight, 2, 2, "F");

    // Add simplified pattern
    doc.setDrawColor(100, 150, 220);
    doc.setLineWidth(0.2);
    doc.line(x + shirtWidth / 2, y, x + shirtWidth / 2, y + shirtHeight);
    doc.line(x, y + shirtHeight / 2, x + shirtWidth, y + shirtHeight / 2);
  }
};
// Function to generate and open a PDF based on the purchase order data
export const generatePurchaseOrderPDF = (invoiceData) => {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  doc.setFillColor(247, 251, 254); // Light gray background
  doc.rect(
    0,
    0,
    doc.internal.pageSize.width,
    doc.internal.pageSize.height,
    "F"
  );
  // Set colors to match design - using direct RGB values, not arrays
  const primaryBlueR = 35;
  const primaryBlueG = 68;
  const primaryBlueB = 103;

  // Set background color for the header
  doc.setFillColor(247, 251, 254); // White background

  // Load and add the company logo image
  const logoUrl = getPDFLogoUrl(); // Use the imported image
  const logoWidth = 70; // Adjust the width of the logo as needed
  const logoHeight = 38; // Adjust the height of the logo as needed
  const logoX = 8; // X position of the logo
  const logoY = 8; // Y position of the logo

  doc.addImage(logoUrl, "PNG", logoX, logoY, logoWidth, logoHeight);

  // Document title
  doc.setTextColor(59, 59, 59);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("PURCHASE ORDER", 82, 15);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("VenX Textiles", 82, 26);

  // Company details
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("15-19/1/1, Simhapuri Colony, Phase II,", 82, 35);
  doc.text("Visakhapatnam - 530047 37AABBC1234X1ZY", 82, 43);

  // Section headers with better styling
  // Purchase order details section
  doc.setFillColor(primaryBlueR, primaryBlueG, primaryBlueB);
  doc.rect(8, 55, 95, 10, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("PURCHASE ORDER", 12, 62);

  // Site details section
  doc.setFillColor(primaryBlueR, primaryBlueG, primaryBlueB);
  doc.rect(107, 55, 95, 10, "F");
  doc.text("SITE DETAILS ", 111, 62);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("(Delivery Location)", 142, 62);

  // Purchase order info section bg

  doc.setDrawColor(220, 220, 220);
  doc.rect(8, 55, 95, 62, "S"); // Add border

  // Site details section bg
  doc.rect(107, 55, 95, 62, "S"); // Add border

  // Purchase order info content
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  // Labels for left column
  doc.setFillColor(255, 255, 255);
  doc.rect(8, 65, 95, 52, "F");
  doc.setFontSize(11);
  doc.text("Order No:", 12, 73);
  doc.text("Order Date:", 12, 82);
  doc.text("Agent Name:", 12, 91);
  doc.text("PO Valid From:", 12, 100);
  doc.text("PO Valid Upto:", 12, 109);

  // Values for left column
  doc.setFillColor(255, 255, 255);
  doc.rect(107, 65, 95, 52, "F");
  doc.setTextColor(59, 59, 59);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("HO/PO/N120", 42, 73);
  doc.text("24 Aug 2023", 42, 82);
  doc.text("", 42, 91);
  doc.text("24 Aug 2023", 42, 100);
  doc.text("08 Sep 2023", 42, 109);

  // Site details info
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "normal");
  doc.text("Site Name:", 111, 73);
  doc.text("Site Address:", 111, 82);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(59, 59, 59);
  doc.setFontSize(11);
  doc.text("Corporate Office", 137, 73);
  // Site address can be added here if needed

  // Billing from section
  doc.setFillColor(primaryBlueR, primaryBlueG, primaryBlueB);
  doc.rect(8, 120, 95, 10, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text("BILLING FROM", 12, 127);

  // Shipping from section
  doc.setFillColor(primaryBlueR, primaryBlueG, primaryBlueB);
  doc.rect(107, 120, 95, 10, "F");
  doc.text("SHIPPING FROM", 111, 127);

  // Billing info section bg
  doc.setDrawColor(220, 220, 220);
  doc.rect(8, 120, 95, 62, "S"); // Add border

  // Shipping info section bg
  doc.rect(107, 120, 95, 62, "S"); // Add border

  // Billing info
  doc.setFillColor(255, 255, 255);
  doc.rect(8, 130, 95, 52, "F");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Supplier Code:", 12, 140);
  doc.text("Supplier Name:", 12, 150);
  doc.text("Address:", 12, 160);
  doc.text("GST No:", 12, 174);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(59, 59, 59);
  doc.text("HO/PO/N120", 42, 140);
  doc.text("XYZ Handlooms", 42, 150);
  doc.text("Shop No #1478, Nehru", 42, 160);
  doc.text("Bazar, Chirala", 42, 166);
  // GST No can be added here

  // Shipping info
  doc.setFillColor(255, 255, 255);
  doc.rect(107, 130, 95, 52, "F");
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "normal");
  doc.text("Supplier Code:", 111, 140);
  doc.text("Supplier Name:", 111, 150);
  doc.text("Address:", 111, 160);
  doc.text("GST No:", 111, 174);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(59, 59, 59);
  doc.text("HO/PO/N120", 141, 140);
  doc.text("XYZ Handlooms", 141, 150);
  doc.text("Shop No #1478, Nehru", 142, 160);
  doc.text("Bazar, Chirala", 141, 166);
  // GST No can be added here

  // Items table with improved styling
  // Table headers
  const tableTop = 190;
  const columnWidths = [10, 30, 45, 25, 10, 15, 15, 22, 22];
  let currentX = 8;

  // Draw table header with background
  doc.setFillColor(255, 255, 255);
  doc.rect(8, tableTop, 185, 10, "F");

  // Table header text
  doc.setFont("helvetica", "bold");
  doc.setTextColor(34, 34, 34);

  // Headers
  {
    let currentX = 8;

    // Draw table header background
    doc.setFillColor(255, 255, 255);
    doc.rect(8, tableTop, 194, 95, "F");

    // Set header font and color
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(34, 34, 34);
    doc.text("SNo", currentX + 1, tableTop + 7);
    currentX += 10;

    doc.text("Product Name", currentX + 3, tableTop + 7);
    currentX += 30;

    doc.text("Details", currentX + 19, tableTop + 7);
    currentX += 45;

    doc.text("HSN", currentX + 9, tableTop + 7);
    currentX += 25;

    doc.text("Qty.", currentX + 2, tableTop + 7);
    currentX += 10;

    doc.text("Rate", currentX + 4, tableTop + 7);
    currentX += 15;

    doc.text("Tax", currentX + 4, tableTop + 7);
    currentX += 15;

    doc.text("Final Rate", currentX + 2, tableTop + 7);
    currentX += 22;

    doc.text("Amount", currentX + 3, tableTop + 7);
    currentX += 22;
  }
  // Reset for content
  currentX = 8;
  let currentY = tableTop + 10;

  // Draw table borders
  doc.setDrawColor(220, 220, 220);

  // Horizontal lines
  doc.line(8, tableTop, 202, tableTop); // Top border
  doc.line(8, tableTop + 10, 202, tableTop + 10); // Bottom of header
  doc.line(8, tableTop + 52, 202, tableTop + 50);
  doc.line(8, tableTop + 95, 202, tableTop + 95);

  // Vertical lines
  doc.line(8, tableTop, 8, tableTop + 95); // Left border

  for (let i = 0; i < columnWidths.length; i++) {
    currentX += columnWidths[i];
    doc.line(currentX, tableTop, currentX, tableTop + 95);
  }

  // Add item rows
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(70, 70, 70);

  // First row data
  currentY = tableTop + 17;
  doc.text("1", 12, currentY);

  // Product name column
  doc.setTextColor(90, 96, 127);
  doc.text("Boys Shirts", 21, currentY);
  doc.text("Brand: Twills", 21, currentY + 4);

  // Draw product image
  drawProductImage(doc, 23, currentY + 10);

  // Details column
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, tableTop + 17);
  doc.text("Pattern: ", 52, tableTop + 21);
  doc.text("Design: ", 52, tableTop + 25);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, tableTop + 17);
  doc.text("Checks", 64, tableTop + 21);
  doc.text("BP", 63, tableTop + 25);

  // Size table
  const sizeTableY = currentY + 10;
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTop + 28, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTop + 31);
  doc.text("Quantity", 73, tableTop + 31);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTop + 28, 35, 20, "S");

  doc.setDrawColor(220, 220, 220);

  // Horizontal lines
  doc.line(52, tableTop + 32, 87, tableTop + 32);
  doc.line(52, tableTop + 36, 87, tableTop + 36);
  doc.line(52, tableTop + 40, 87, tableTop + 40);
  doc.line(52, tableTop + 44, 87, tableTop + 44);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTop + 35);
  doc.text("5", 77, tableTop + 35);

  doc.text("M", 56, tableTop + 39);
  doc.text("6", 77, tableTop + 39);

  doc.text("L", 56, tableTop + 43);
  doc.text("1", 77, tableTop + 43);

  doc.text("XL", 55, tableTop + 47);
  doc.text("2", 77, tableTop + 47);

  // Rest of item data
  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currentY);
  doc.text(invoiceData?.quantity || "14", 120, currentY);
  doc.text("1562.50", 130, currentY);
  doc.text("187.50", 145, currentY);
  doc.text("1750.00", 162, currentY);
  doc.text(invoiceData?.amount || "24500.00", 184, currentY);

  // Second row - similar to first
  currentY = tableTop + 60;
  doc.text("2", 12, currentY);

  doc.text("Boys Shirts", 21, currentY);
  doc.text("Brand: Twills", 21, currentY + 4);

  drawProductImage(doc, 23, currentY + 10);

  // Second row details
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, currentY);
  doc.text("Pattern: ", 52, currentY + 4);
  doc.text("Design: ", 52, currentY + 8);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, currentY);
  doc.text("Checks", 64, currentY + 4);
  doc.text("BP", 63, currentY + 8);

  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTop + 71, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTop + 74);
  doc.text("Quantity", 73, tableTop + 74);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTop + 71, 35, 20, "S");
  // Add size table for second item (optional)

  doc.setDrawColor(220, 220, 220);

  // Horizontal lines
  doc.line(52, tableTop + 75, 87, tableTop + 75);
  doc.line(52, tableTop + 79, 87, tableTop + 79);
  doc.line(52, tableTop + 83, 87, tableTop + 83);
  doc.line(52, tableTop + 87, 87, tableTop + 87);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTop + 78);
  doc.text("5", 77, tableTop + 78);

  doc.text("M", 56, tableTop + 82);
  doc.text("6", 77, tableTop + 82);

  doc.text("L", 56, tableTop + 86);
  doc.text("1", 77, tableTop + 86);

  doc.text("XL", 55, tableTop + 90);
  doc.text("2", 77, tableTop + 90);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currentY);
  doc.text("14", 120, currentY);
  doc.text("1562.50", 130, currentY);
  doc.text("187.50", 145, currentY);
  doc.text("1750.00", 162, currentY);
  doc.text("24500.00", 184, currentY);

  doc.addPage();

  doc.setFillColor(247, 251, 254); // Light gray background
  doc.rect(
    0,
    0,
    doc.internal.pageSize.width,
    doc.internal.pageSize.height,
    "F"
  );
  const tableTops = 10;
  const columnWidth = [10, 30, 45, 25, 10, 15, 15, 22, 22];
  doc.setDrawColor(220, 220, 220);
  let currentx = 8;

  doc.setFillColor(255, 255, 255);
  doc.rect(8, tableTops, 194, 255, "F");
  doc.setDrawColor(220, 220, 220);
  // Horizontal lines
  doc.line(8, tableTops, 202, tableTops); // Top border
  doc.line(8, tableTops + 46, 202, tableTops + 45);
  doc.line(8, tableTops + 90, 202, tableTops + 90);
  doc.line(8, tableTops + 135, 202, tableTops + 135);
  doc.line(8, tableTops + 180, 202, tableTops + 180);
  doc.line(8, tableTops + 225, 202, tableTops + 225);

  // Vertical lines
  doc.line(8, tableTops, 8, tableTops + 225); // Left border

  for (let i = 0; i < columnWidth.length; i++) {
    currentx += columnWidth[i];
    doc.line(currentx, tableTops, currentx, tableTops + 225);
  }

  currentx = 8;
  let currenty = tableTop + 10;

  // Add item rows
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(70, 70, 70);

  // First row data
  currenty = tableTops + 10;
  doc.text("3", 12, currenty);

  // Product name column
  doc.setTextColor(90, 96, 127);
  doc.text("Boys Shirts", 21, currenty);
  doc.text("Brand: Twills", 21, currenty + 4);

  drawProductImage(doc, 23, currenty + 12);

  // Second row details
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, currenty);
  doc.text("Pattern: ", 52, currenty + 4);
  doc.text("Design: ", 52, currenty + 8);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, currenty);
  doc.text("Checks", 64, currenty + 4);
  doc.text("BP", 63, currenty + 8);

  // Size table
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTops + 22, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTops + 25);
  doc.text("Quantity", 73, tableTops + 25);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTops + 22, 35, 20, "S");

  doc.setDrawColor(220, 220, 220);

  // Horizontal lines
  doc.line(52, tableTops + 26, 87, tableTops + 26);
  doc.line(52, tableTops + 30, 87, tableTops + 30);
  doc.line(52, tableTops + 34, 87, tableTops + 34);
  doc.line(52, tableTops + 38, 87, tableTops + 38);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTops + 29);
  doc.text("5", 77, tableTops + 29);

  doc.text("M", 56, tableTops + 33);
  doc.text("6", 77, tableTops + 33);

  doc.text("L", 56, tableTops + 37);
  doc.text("1", 77, tableTops + 37);

  doc.text("XL", 55, tableTops + 41);
  doc.text("2", 77, tableTops + 41);

  // Rest of item data
  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currenty);
  doc.text(invoiceData?.quantity || "14", 120, currenty);
  doc.text("1562.50", 130, currenty);
  doc.text("187.50", 145, currenty);
  doc.text("1750.00", 162, currenty);
  doc.text(invoiceData?.amount || "24500.00", 184, currenty);

  currenty = tableTops + 55;
  doc.text("4", 12, currenty);

  doc.text("Boys Shirts", 21, currenty);
  doc.text("Brand: Twills", 21, currenty + 4);

  drawProductImage(doc, 23, currenty + 12);

  // Second row details
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, currenty);
  doc.text("Pattern: ", 52, currenty + 4);
  doc.text("Design: ", 52, currenty + 8);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, currenty);
  doc.text("Checks", 64, currenty + 4);
  doc.text("BP", 63, currenty + 8);

  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTops + 66, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTops + 69);
  doc.text("Quantity", 73, tableTops + 69);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTops + 66, 35, 20, "S");
  // Add size table for second item (optional)

  doc.setDrawColor(220, 220, 220);

  // Horizontal lines
  doc.line(52, tableTops + 70, 87, tableTops + 70);
  doc.line(52, tableTops + 74, 87, tableTops + 74);
  doc.line(52, tableTops + 78, 87, tableTops + 78);
  doc.line(52, tableTops + 82, 87, tableTops + 82);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTops + 73);
  doc.text("5", 77, tableTops + 73);

  doc.text("M", 56, tableTops + 77);
  doc.text("6", 77, tableTops + 77);

  doc.text("L", 56, tableTops + 81);
  doc.text("1", 77, tableTops + 81);

  doc.text("XL", 55, tableTops + 85);
  doc.text("2", 77, tableTops + 85);
  // Open the PDF in a new tab

  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currenty);
  doc.text("14", 120, currenty);
  doc.text("1562.50", 130, currenty);
  doc.text("187.50", 145, currenty);
  doc.text("1750.00", 162, currenty);
  doc.text("24500.00", 184, currenty);

  currenty = tableTops + 100;
  doc.text("5", 12, currenty);

  doc.setTextColor(90, 96, 127);
  doc.text("Boys Shirts", 21, currenty);
  doc.text("Brand: Twills", 21, currenty + 4);

  drawProductImage(doc, 23, currenty + 12);

  // Second row details
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, currenty);
  doc.text("Pattern: ", 52, currenty + 4);
  doc.text("Design: ", 52, currenty + 8);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, currenty);
  doc.text("Checks", 64, currenty + 4);
  doc.text("BP", 63, currenty + 8);

  // Size table
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTops + 111, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTops + 114);
  doc.text("Quantity", 73, tableTops + 114);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTops + 111, 35, 20, "S");

  doc.line(52, tableTops + 115, 87, tableTops + 115);
  doc.line(52, tableTops + 119, 87, tableTops + 119);
  doc.line(52, tableTops + 123, 87, tableTops + 123);
  doc.line(52, tableTops + 127, 87, tableTops + 127);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTops + 118);
  doc.text("5", 77, tableTops + 118);

  doc.text("M", 56, tableTops + 122);
  doc.text("6", 77, tableTops + 122);

  doc.text("L", 56, tableTops + 126);
  doc.text("1", 77, tableTops + 126);

  doc.text("XL", 55, tableTops + 130);
  doc.text("2", 77, tableTops + 130);

  // Rest of item data
  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currenty);
  doc.text(invoiceData?.quantity || "14", 120, currenty);
  doc.text("1562.50", 130, currenty);
  doc.text("187.50", 145, currenty);
  doc.text("1750.00", 162, currenty);
  doc.text(invoiceData?.amount || "24500.00", 184, currenty);

  currenty = tableTops + 145;
  doc.text("6", 12, currenty);

  doc.setTextColor(90, 96, 127);
  doc.text("Boys Shirts", 21, currenty);
  doc.text("Brand: Twills", 21, currenty + 4);

  drawProductImage(doc, 23, currenty + 12);

  // Second row details
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, currenty);
  doc.text("Pattern: ", 52, currenty + 4);
  doc.text("Design: ", 52, currenty + 8);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, currenty);
  doc.text("Checks", 64, currenty + 4);
  doc.text("BP", 63, currenty + 8);

  // Size table
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTops + 156, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTops + 159);
  doc.text("Quantity", 73, tableTops + 159);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTops + 156, 35, 20, "S");

  doc.line(52, tableTops + 160, 87, tableTops + 160);
  doc.line(52, tableTops + 164, 87, tableTops + 164);
  doc.line(52, tableTops + 168, 87, tableTops + 168);
  doc.line(52, tableTops + 172, 87, tableTops + 172);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTops + 163);
  doc.text("5", 77, tableTops + 163);

  doc.text("M", 56, tableTops + 167);
  doc.text("6", 77, tableTops + 167);

  doc.text("L", 56, tableTops + 171);
  doc.text("1", 77, tableTops + 171);

  doc.text("XL", 55, tableTops + 175);
  doc.text("2", 77, tableTops + 175);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currenty);
  doc.text(invoiceData?.quantity || "14", 120, currenty);
  doc.text("1562.50", 130, currenty);
  doc.text("187.50", 145, currenty);
  doc.text("1750.00", 162, currenty);
  doc.text(invoiceData?.amount || "24500.00", 184, currenty);

  currenty = tableTops + 190;
  doc.text("7", 12, currenty);

  doc.setTextColor(90, 96, 127);
  doc.text("Boys Shirts", 21, currenty);
  doc.text("Brand: Twills", 21, currenty + 4);

  drawProductImage(doc, 23, currenty + 12);

  // Second row details
  doc.setTextColor(90, 96, 127);
  doc.setFont("helvetica", "italic");
  doc.text("Color: ", 52, currenty);
  doc.text("Pattern: ", 52, currenty + 4);
  doc.text("Design: ", 52, currenty + 8);

  doc.setTextColor(35, 68, 103);
  doc.setFont("helvetica", "normal");
  doc.text("Blue", 61, currenty);
  doc.text("Checks", 64, currenty + 4);
  doc.text("BP", 63, currenty + 8);

  // Size table
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setFillColor(247, 251, 254);
  doc.rect(52, tableTops + 201, 35, 4, "F");
  doc.setTextColor(35, 68, 103);
  doc.text("Size", 54, tableTops + 204);
  doc.text("Quantity", 73, tableTops + 204);

  doc.setDrawColor(220, 220, 220);
  doc.rect(52, tableTops + 201, 35, 20, "S");

  doc.line(52, tableTops + 205, 87, tableTops + 205);
  doc.line(52, tableTops + 209, 87, tableTops + 209);
  doc.line(52, tableTops + 213, 87, tableTops + 213);
  doc.line(52, tableTops + 217, 87, tableTops + 217);

  doc.setFont("helvetica", "italic");
  doc.text("S", 56, tableTops + 208);
  doc.text("5", 77, tableTops + 208);

  doc.text("M", 56, tableTops + 212);
  doc.text("6", 77, tableTops + 212);

  doc.text("L", 56, tableTops + 216);
  doc.text("1", 77, tableTops + 216);

  doc.text("XL", 55, tableTops + 220);
  doc.text("2", 77, tableTops + 220);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(9);
  doc.text("697555721", 98, currenty);
  doc.text(invoiceData?.quantity || "14", 120, currenty);
  doc.text("1562.50", 130, currenty);
  doc.text("187.50", 145, currenty);
  doc.text("1750.00", 162, currenty);
  doc.text(invoiceData?.amount || "24500.00", 184, currenty);

  doc.setDrawColor(220, 220, 220);
  doc.rect(8, tableTops + 225, 120, 30, "S");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text(
    "(Inwords : Two Lakh Twenty Eight Thousands Six Hundred and ",
    12,
    tableTops + 232
  );
  doc.text("Seven Rupees )", 12, tableTops + 237);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(35, 68, 103);
  doc.text("Remarks: ", 12, tableTops + 245);
  doc.text("Terms & Conditions: ", 12, tableTops + 251);

  doc.setFont("helvetica", "normal");
  doc.setDrawColor(220, 220, 220);
  doc.rect(128, tableTops + 225, 74, 30, "S");
  doc.setTextColor(90, 96, 127);
  doc.setFontSize(10);
  doc.text("Total Quantity:", 132, tableTops + 232);
  doc.text("Taxable Amount:", 132, tableTops + 238);
  doc.text("Tax Amount:", 132, tableTops + 244);

  doc.setFont("helvetica", "bold");
  doc.setTextColor(35, 68, 103);
  doc.text("Total Quantity:", 132, tableTops + 250);
  doc.text("228607.00", 182, tableTops + 250);

  doc.setFont("helvetica", "normal");
  doc.text("92", 195, tableTops + 232);
  doc.text("204563.75", 182, tableTops + 238);
  doc.text("24043.65", 184, tableTops + 244);

  const pdfBlob = doc.output("blob");
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, "_blank");
};

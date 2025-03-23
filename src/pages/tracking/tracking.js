// Sample Shipments Data
let shipments = [
    { trackingID: "10001", customerName: "Alice Johnson", status: "Pending", estimatedDelivery: "2025-03-25", lastUpdated: "2025-03-18" },
    { trackingID: "10002", customerName: "Bob Smith", status: "In Transit", estimatedDelivery: "2025-03-22", lastUpdated: "2025-03-19" },
    { trackingID: "10003", customerName: "Charlie Brown", status: "Delivered", estimatedDelivery: "2025-03-20", lastUpdated: "2025-03-20" },
    { trackingID: "10004", customerName: "David Lee", status: "Pending", estimatedDelivery: "2025-03-28", lastUpdated: "2025-03-21" },
    { trackingID: "10005", customerName: "Emily Davis", status: "In Transit", estimatedDelivery: "2025-03-23", lastUpdated: "2025-03-19" },
    { trackingID: "10006", customerName: "Frank White", status: "Delivered", estimatedDelivery: "2025-03-18", lastUpdated: "2025-03-18" },
    { trackingID: "10007", customerName: "Grace Martin", status: "Pending", estimatedDelivery: "2025-03-30", lastUpdated: "2025-03-22" },
    { trackingID: "10008", customerName: "Henry Adams", status: "In Transit", estimatedDelivery: "2025-03-27", lastUpdated: "2025-03-20" },
    { trackingID: "10009", customerName: "Ivy Thomas", status: "Delivered", estimatedDelivery: "2025-03-19", lastUpdated: "2025-03-19" },
    { trackingID: "10010", customerName: "Jack Wilson", status: "Pending", estimatedDelivery: "2025-04-02", lastUpdated: "2025-03-24" }
];

// Function to Track Order
function trackOrder() {
    let trackingID = document.getElementById("trackingInput").value.trim();
    let shipment = shipments.find(s => s.trackingID === trackingID);

    if (shipment) {
        document.getElementById("customerName").textContent = shipment.customerName;
        document.getElementById("status").textContent = shipment.status;
        document.getElementById("estimatedDelivery").textContent = shipment.estimatedDelivery;
        document.getElementById("lastUpdated").textContent = shipment.lastUpdated;

        // Show order details
        document.getElementById("shipmentDetails").classList.remove("hidden");
    } else {
        alert("Tracking ID not found!");
        document.getElementById("shipmentDetails").classList.add("hidden");
    }
}

// Function to Update Status (Admin Panel Simulation)
function updateStatus() {
    let trackingID = document.getElementById("trackingInput").value.trim();
    let newStatus = document.getElementById("statusUpdate").value;
    let shipment = shipments.find(s => s.trackingID === trackingID);

    if (shipment) {
        shipment.status = newStatus;
        shipment.lastUpdated = new Date().toISOString().split('T')[0]; // Update last updated date

        // Refresh displayed data
        document.getElementById("status").textContent = shipment.status;
        document.getElementById("lastUpdated").textContent = shipment.lastUpdated;
        alert("Status Updated Successfully!");
    } else {
        alert("Please enter a valid Tracking ID first!");
    }
}

// Function to Filter Shipments
function filterShipments() {
    let selectedStatus = document.getElementById("statusFilter").value;
    
    let filteredShipments = shipments.filter(shipment => 
        selectedStatus === "All" || shipment.status === selectedStatus
    );

    console.log("Filtered Shipments:", filteredShipments); // For testing purpose
    alert(`Found ${filteredShipments.length} shipments with status: ${selectedStatus}`);
}

// Ensure all event listeners are attached after DOM is loaded
window.onload = function() {
    document.getElementById("trackBtn").addEventListener("click", trackOrder);
    document.getElementById("updateBtn").addEventListener("click", updateStatus);
    document.getElementById("filterBtn").addEventListener("click", filterShipments);
};

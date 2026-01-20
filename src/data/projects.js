import Queuing from "../thumbnails/1.png";
import Inventory from "../thumbnails/2.png";
import LPS from "../thumbnails/3.png";
import BudgetMonitoring from "../thumbnails/4.png";
import Warehouse from "../thumbnails/5.png";
import RateSheet from "../thumbnails/6.png";

import VidQueuing from "../videos/Queuing.mp4";
import VidInventory from "../videos/Inventory.mp4";
import VidLPS from "../videos/LPS.mp4";
import VidBudgetMonitoring from "../videos/Budget Monitoring.mp4";
import VidWarehouse from "../videos/Warehouse.mp4";
import VidRateSheet from "../videos/Rate Sheet.mp4";

const projects = [
  {
    id: 1,
    title: "INVENTORY SYSTEM",
    description:
      "A system that allows users to add items to the inventory, categorizing them as spare units, brand-new units, or both. Users can input detailed information about each device, making it accessible in the system for tracking. The system enables users to view the status of each item, assign it to employees, handle borrowing requests, and manage returns or surrenders. Additionally, it includes preventive maintenance and diagnostic result features used for evaluating devices during returns, employee resignations, and annual maintenance checks.",
    tech: "HTML, CSS, PHP, JavaScript",
    pic: Inventory,
    video: VidInventory
  },
  {
    id: 2,
    title: "LPS (Freelance project)",
    description:
      "This is a static website I created for a small transportation business to establish their online presence. The site showcases their mission and vision, a description of their services, and what sets them apart in the industry. It also includes their contact information, as well as a portfolio of accomplishments and past projects to highlight their experience and reliability. The design is simple and informative, aimed at effectively communicating the company’s identity and offerings.",
    tech: "HTML, CSS, PHP, JavaScript",
    pic: LPS,
    video: VidLPS
  },
  {
    id: 3,
    title: "QUEUING SYSTEM",
    description:
      "This system allows customers to enter their concerns, which are then added to a pending queue with their name and assigned number. When an employee presses “Next,” the next person in line is displayed on a separate monitor along with the name of the staff handling their concern. If the issue cannot be immediately resolved, the staff can update the status to “Waiting List.” For concerns that are unresolvable, the status can be marked as “Unresolved,” helping maintain clear tracking and efficient management of customer concerns.",
    tech: "HTML, CSS, JavaScript, PHP",
    pic: Queuing,
    video: VidQueuing
  },
  {
    id: 4,
    title: "WAREHOUSE SYSTEM",
    description:
      "This system is designed to streamline the storage and tracking of boxes within a warehouse environment. Users can add boxes along with detailed item descriptions, which are then submitted for processing. Once approved by the administrator, the boxes are officially stored and marked as available in the warehouse. The system also manages the pull-out process, allowing authorized users to request and track box retrievals. If a box is pulled out temporarily, it must be returned and re-logged into the system for continued tracking. This ensures accurate inventory management and maintains the integrity of warehouse operations.",
    tech: "HTML, CSS, Bootstrap, JavaScript, PHP",
    pic: Warehouse,
    video: VidWarehouse
  },
  {
    id: 5,
    title: "RATE SHEET SYSTEM",
    description:
      "This system enables users to create and manage rate sheets specific to various regions and locations. Users can input base rates, apply additional allowances or increases, and then choose to either print or save the completed rate sheet. Once created, the rate sheets are stored in a centralized management section where they can be modified or updated as needed. The system also supports the addition, editing, and uploading of wage orders and SSS statutory contributions, ensuring that all relevant rate and compliance data are easily accessible and up to date.",
    tech: "HTML, CSS, Bootstrap, JavaScript, PHP",
    pic: RateSheet,
    video: VidRateSheet
  },
  {
    id: 6,
    title: "BUDGET MONITORING SYSTEM",
    description:
      "A system designed to help users manage and monitor their budgets efficiently. Users can enter G/L codes along with their corresponding budget allocations. The system features an itemized expenses page where users can record individual expenses. It automatically calculates and displays total expenditures and remaining budget through monthly, yearly, and summary monitoring views, providing clear insights into budget usage and financial planning.",
    tech: "HTML, CSS, Tailwind, JavaScript, PHP",
    pic: BudgetMonitoring,
    video: VidBudgetMonitoring
  }
];

export default projects;

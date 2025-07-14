import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const erpServices = [
    { name: "SAP BTP Implementation", path: "/sap-btp-implementation" },
    { name: "SAP Fiori Development", path: "/sap-fiori-development" }, 
    { name: "SAP Fiori Consulting", path: "/sap-fiori-consulting" },
    { name: "SAP S/4HANA Migration", path: "/sap-s4hana-migration" },
    { name: "SAP Integration Services", path: "/sap-integration-services" }
  ];

  const otherServices = [
    "Web Development",
    "App Development", 
    "Digital Marketing",
    "Software Testing"
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              SHRINE
              <span className="text-accent text-sm ml-1">InfoTech Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            
            {/* ERP Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('erp')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                ERP Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'erp' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-4 z-50">
                  {erpServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 rounded transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('other')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Other Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'other' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg p-4 z-50">
                  {otherServices.map((service) => (
                    <a
                      key={service}
                      href="#other-services"
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 rounded transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <Link to="/" className="block text-foreground hover:text-primary">Home</Link>
              <a href="#about" className="block text-foreground hover:text-primary">About Us</a>
              
              <div>
                <div className="font-medium text-foreground mb-2">ERP Solutions</div>
                <div className="pl-4 space-y-2">
                  {erpServices.map((service) => (
                    <Link key={service.name} to={service.path} className="block text-sm text-muted-foreground hover:text-primary">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium text-foreground mb-2">Other Services</div>
                <div className="pl-4 space-y-2">
                  {otherServices.map((service) => (
                    <a key={service} href="#other-services" className="block text-sm text-muted-foreground hover:text-primary">
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#contact" className="block text-foreground hover:text-primary">Contact</a>
              
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import "./App.css";

function App() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 0);
  };

  const invoiceItems = [
    {
      description: "ব্রয়লার প্রি-স্টার্টার",
      quantity: 2,
      weight: 100,
      price: 50,
      total: 5000,
    },
  ];

  const minRows = 8;
  const emptyRows = minRows - invoiceItems.length;

  const convertToBanglaNumber = (num) => {
    const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((digit) => banglaNumbers[digit])
      .join("");
  };

  return (
    <>
      <div className="invoice-container">
        {!isPrinting && (
          <button className="print-button" onClick={handlePrint}>
            Print
          </button>
        )}
        <div className="invoice-content">
          <div className="invoice-copy">
            <div className="invoice-header">
              <div className="invoice-header-into">
                <h1>বিসমিল্লাহির রাহমানির রাহিম</h1>
              </div>
              <div className="invoice-header-company">
                <div className="invoice-header-company-name">
                  <h1>মেসার্স পরশ এন্টারপ্রাইজ</h1>
                </div>
                <div className="invoice-header-company-contact">
                  <div className="invoice-header-company-number">
                    <p>ওয়েবসাইট:</p>
                    <span>www.poroshent.com</span>
                  </div>
                  <div className="invoice-header-company-number">
                    <p>ইমেইল: </p>
                    <span>support@poroshent.com</span>
                  </div>
                  <div className="invoice-header-company-number">
                    <p>মোবাইল :</p>
                    <span>০১৭৯৯-৩৪৫৪৯৯</span>
                  </div>
                </div>
              </div>

              <div className="invoice-header-provider">
                <div className="invoice-header-provider-name">
                  <h1>প্রো: মোঃ নূরে আলম সিদ্দিক (রুবেল)</h1>
                  <p>উত্তর বাজার, নকলা, শেরপুর। </p>
                </div>
                <div className="invoice-header-provider-copy">অফিস কপি</div>
              </div>
              <div className="invoice-header-ads">
                <p>এখানে সুষম ও মানসম্পন্ন মাছ-মুরগীর খাদ্য বিক্রয় করা হয়। </p>
              </div>
              <div className="invoice-header-client">
                <div className="invoice-header-client-date">
                  <div className="invoice-no">
                    <p>ক্রমিক নং: </p>
                    <span>240703001</span>
                  </div>
                  <div className="invoice-date">
                    <p>তারিখ:</p> <span>০৩ জুলাই ২০২৪</span>
                  </div>
                </div>
                <div className="invoice-header-client-information">
                  <div className="invoice-name">
                    <p>নাম:</p>
                    <span>শফিউল আলাম</span>
                  </div>
                  <div className="invoice-mobile">
                    <p>মোবাইল:</p>
                    <span>০১৭৯৯৩৪৫৪৯৯</span>
                  </div>
                </div>
                <div className="invoice-header-client-address">
                  <p>ঠিকানা :</p>
                  <span>নকলা, শেরপুর</span>
                </div>
              </div>
            </div>
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>নং:</th>
                  <th>বিবরণ</th>
                  <th>পরিমান</th>
                  <th>ওজন</th>
                  <th>দর (KG)</th>
                  <th>মোট মূল্য </th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((item, index) => (
                  <tr key={index}>
                    <td>{convertToBanglaNumber(index + 1)}</td>
                    <td>{item.description}</td>
                    <td>{convertToBanglaNumber(item.quantity)} বস্তা</td>
                    <td>{convertToBanglaNumber(item.weight)} KG</td>
                    <td>{convertToBanglaNumber(item.price)} টাকা</td>
                    <td>{convertToBanglaNumber(item.total)} টাকা</td>
                  </tr>
                ))}
                {Array.from({ length: emptyRows }).map((_, index) => (
                  <tr key={`empty-${index}`}>
                    <td>
                      {convertToBanglaNumber(invoiceItems.length + index + 1)}
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="invoice-summary">
              <div className="invoice-kothay">
                <div className="invoice-kothay-text">
                  <p>কথায় :</p>
                  <span>পাঁচ হাজার টাকা মাত্র </span>
                </div>

                <div className="invoice-kothay-image">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisXI3MXxjR6LNJajEu3nLz92bXcdYr2kgJQVLtDmLfpdo4Nh9aozRv1sUMGWZMSI6zbZnOePnL8wPv4JrKKzYYv4_zULeqTeQ_lFhkKKCtSTZo3uDuQBeGjcPs2_-Xc5BFS528aymGFCg/s1600/NOURISH+Poultry+Feed+Logo.png"
                    alt="img"
                  />
                </div>
              </div>
              <table className="summary-table">
                <tbody>
                  <tr>
                    <td>মোট = </td>
                    <td>৫০০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>ডিসকাউন্ট =</td>
                    <td>১০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>সর্বমোট =</td>
                    <td>৪৯০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>জমা =</td>
                    <td>৪৯০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>বাকী =</td>
                    <td>0 টাকা</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="invoice-footer">
              <div className="invoice-footer-client">
                <span>গ্রহীতার স্বাক্ষর</span>
              </div>
              <div className="invoice-footer-ads">
                <span>একদিনের ব্রয়লার , লেয়ার ,কর্ক বাচ্চা বিক্রয় করা হয়।</span>
              </div>
              <div className="invoice-footer-office">
                <span>বিক্রেতার স্বাক্ষর </span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="invoice-copy">
            <div className="invoice-header">
              <div className="invoice-header-into">
                <h1>বিসমিল্লাহির রাহমানির রাহিম</h1>
              </div>
              <div className="invoice-header-company">
                <div className="invoice-header-company-name">
                  <h1>মেসার্স পরশ এন্টারপ্রাইজ</h1>
                </div>
                <div className="invoice-header-company-contact">
                  <div className="invoice-header-company-number">
                    <p>ওয়েবসাইট:</p>
                    <span>www.poroshent.com</span>
                  </div>
                  <div className="invoice-header-company-number">
                    <p>ইমেইল: </p>
                    <span>support@poroshent.com</span>
                  </div>
                  <div className="invoice-header-company-number">
                    <p>মোবাইল :</p>
                    <span>০১৭৯৯-৩৪৫৪৯৯</span>
                  </div>
                </div>
              </div>

              <div className="invoice-header-provider">
                <div className="invoice-header-provider-name">
                  <h1>প্রো: মোঃ নূরে আলম সিদ্দিক (রুবেল)</h1>
                  <p>উত্তর বাজার, নকলা, শেরপুর। </p>
                </div>
                <div className="invoice-header-provider-copy">গ্রাহক কপি</div>
              </div>
              <div className="invoice-header-ads">
                <p>এখানে সুষম ও মানসম্পন্ন মাছ-মুরগীর খাদ্য বিক্রয় করা হয়। </p>
              </div>
              <div className="invoice-header-client">
                <div className="invoice-header-client-date">
                  <div className="invoice-no">
                    <p>ক্রমিক নং: </p>
                    <span>240703001</span>
                  </div>
                  <div className="invoice-date">
                    <p>তারিখ:</p> <span>০৩ জুলাই ২০২৪</span>
                  </div>
                </div>
                <div className="invoice-header-client-information">
                  <div className="invoice-name">
                    <p>নাম:</p>
                    <span>শফিউল আলাম</span>
                  </div>
                  <div className="invoice-mobile">
                    <p>মোবাইল:</p>
                    <span>০১৭৯৯৩৪৫৪৯৯</span>
                  </div>
                </div>
                <div className="invoice-header-client-address">
                  <p>ঠিকানা :</p>
                  <span>নকলা, শেরপুর</span>
                </div>
              </div>
            </div>
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>নং:</th>
                  <th>বিবরণ</th>
                  <th>পরিমান</th>
                  <th>ওজন</th>
                  <th>দর (KG)</th>
                  <th>মোট মূল্য </th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((item, index) => (
                  <tr key={index}>
                    <td>{convertToBanglaNumber(index + 1)}</td>
                    <td>{item.description}</td>
                    <td>{convertToBanglaNumber(item.quantity)} বস্তা</td>
                    <td>{convertToBanglaNumber(item.weight)} KG</td>
                    <td>{convertToBanglaNumber(item.price)} টাকা</td>
                    <td>{convertToBanglaNumber(item.total)} টাকা</td>
                  </tr>
                ))}
                {Array.from({ length: emptyRows }).map((_, index) => (
                  <tr key={`empty-${index}`}>
                    <td>
                      {convertToBanglaNumber(invoiceItems.length + index + 1)}
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="invoice-summary">
              <div className="invoice-kothay">
                <div className="invoice-kothay-text">
                  <p>কথায় :</p>
                  <span>পাঁচ হাজার টাকা মাত্র </span>
                </div>

                <div className="invoice-kothay-image">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisXI3MXxjR6LNJajEu3nLz92bXcdYr2kgJQVLtDmLfpdo4Nh9aozRv1sUMGWZMSI6zbZnOePnL8wPv4JrKKzYYv4_zULeqTeQ_lFhkKKCtSTZo3uDuQBeGjcPs2_-Xc5BFS528aymGFCg/s1600/NOURISH+Poultry+Feed+Logo.png"
                    alt="img"
                  />
                </div>
              </div>
              <table className="summary-table">
                <tbody>
                  <tr>
                    <td>মোট = </td>
                    <td>৫০০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>ডিসকাউন্ট =</td>
                    <td>১০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>সর্বমোট =</td>
                    <td>৪৯০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>জমা =</td>
                    <td>৪৯০০ টাকা</td>
                  </tr>
                  <tr>
                    <td>বাকী =</td>
                    <td>0 টাকা</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="invoice-footer">
              <div className="invoice-footer-client">
                <span>গ্রহীতার স্বাক্ষর</span>
              </div>
              <div className="invoice-footer-ads">
                <span>একদিনের ব্রয়লার , লেয়ার ,কর্ক বাচ্চা বিক্রয় করা হয়।</span>
              </div>
              <div className="invoice-footer-office">
                <span>বিক্রেতার স্বাক্ষর </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

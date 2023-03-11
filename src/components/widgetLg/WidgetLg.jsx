import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg" 
                        />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2nd Jun 2021</td>
                    <td className="widgetLgAmount">$100.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg" 
                        />
                        <span className="widgetLgName">Patrick Thompson</span>
                    </td>
                    <td className="widgetLgDate">10th Sep 2021</td>
                    <td className="widgetLgAmount">$2000.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg" 
                        />
                        <span className="widgetLgName">Adams Mania</span>
                    </td>
                    <td className="widgetLgDate">6th Mar 2021</td>
                    <td className="widgetLgAmount">$599.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1610130383669-95917c70ca20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg" 
                        />
                        <span className="widgetLgName">Kyrie Anderson</span>
                    </td>
                    <td className="widgetLgDate">29th Oct 2021</td>
                    <td className="widgetLgAmount">$7422.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

import { Link } from "react-router-dom";

const AdmissionTable = ({ data }) => {
    const { id, collegeName, collegeRatings, admissionDate } = data;
    return (
        <tbody>
            <tr>
                <td>
                    <div
                        className="flex items-center space-x-3">
                        {id}
                    </div>
                </td>
                <td>
                    {collegeName}
                </td>
                <td
                    className="text-center">
                    {collegeRatings}
                </td>
                <td>
                    {admissionDate}
                </td>
                <th>
                    <Link
                         to={`/admissionApply/${id}`}
                        className="btn bg-gradient-to-r from-yellow-200 from-10% via-sky-200 via-30% to-orange-200 to-90% px-10 font-bold">
                        Apply
                    </Link>
                </th>
            </tr>
        </tbody>
    );
};

export default AdmissionTable;
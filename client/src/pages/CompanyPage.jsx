import { useParams } from 'react-router';
import { getCompanyById } from '../lib/queries';
import { useEffect, useState } from 'react';

function CompanyPage() {
  const { companyId } = useParams();

  const [company, setCompany] = useState()

  useEffect(() => {
    getCompanyById(companyId).then(setCompany)
  }, [companyId])

  if (!company) {
    return "Loading,.."
  }
  // const company = companies.find((company) => company.id === companyId);
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );
}

export default CompanyPage;

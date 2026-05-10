import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCountries } from '../../../app/services/services'; // Fix: corrected import path
import "./Countries.scss";

// v3.1 country shape
interface Country {
  name: { common: string; official: string };
  capital?: string[];
  region: string;
  timezones: string[];
  flags: { svg: string; png: string };
}

function Countries(props: any) {
  const { countrieslist: countries } = props;
  const [countrieslist, setCountrieslist] = useState<Country[]>(countries);

  useEffect(() => {
    setCountrieslist(countries);
  }, [countries]);

  const sortByCapital = () => {
    const dup = [...countrieslist];
    dup.sort((a, b) => {
      const capA = a.capital?.[0] ?? "";
      const capB = b.capital?.[0] ?? "";
      return capA.localeCompare(capB);
    });
    setCountrieslist(dup);
  };

  return (
    <div className="countries">
      <h1>Countries</h1>
      {countrieslist.length === 0 ? (
        <button className="countries__button" onClick={() => { props.getCountries(); }}>
          Get All Countries
        </button>
      ) : (
        <button onClick={sortByCapital}>Sort by Capital</button>
      )}
      <ul className='countries__list'>
        {countrieslist.map((country, index) => (
          <li key={index} className="countries__list__country">
            <div className="countries__list__country__data">
              {/* Fix: v3.1 uses name.common instead of name */}
              <h3 className='countries__list__country__data__name'>{country.name.common}</h3>
              {/* Fix: v3.1 capital is an array */}
              <p>{country.capital?.[0] ?? "N/A"}</p>
              <p>{country.region}</p>
              <p>{country.timezones?.[0]}</p>
            </div>
            {/* Fix: v3.1 uses flags.svg instead of flag */}
            <img
              className='countries__list__country__flag'
              src={country.flags?.svg || country.flags?.png}
              alt={`${country.name.common} flag`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(store: any) {
  return store.countries;
}
function mapDispatchToProps(dispatch: any) {
  return {
    getCountries: () => { dispatch(getAllCountries()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);

var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#SatelliteDynamics.jl-Documentation-1",
    "page": "Home",
    "title": "SatelliteDynamics.jl Documentation",
    "category": "section",
    "text": "Welcome to the SatelliteDynamics.jl documentation! The package is meant to address the needs of the satellite operator, academic researcher, and public enthusiast  communities. In particular, it is designed and built to fill the following needs:Open-source, MIT-lencesed software to remove barriers to entry of doing high-fidelity satellite modeling.\nHigh-quality, validated, tested library for orbit and attitude dynamics modeling.\nEasily acceible API design to make implementation of simulation and analysis intuitive."
},

{
    "location": "#Getting-Started:-Installation-And-First-Steps-1",
    "page": "Home",
    "title": "Getting Started: Installation And First Steps",
    "category": "section",
    "text": "To install the package, use the following command inside the Julia REPL:Pkg.add(\"SatelliteDynamics\")To load the package, use the command:using SatelliteDynamics"
},

{
    "location": "#Package-Structure-1",
    "page": "Home",
    "title": "Package Structure",
    "category": "section",
    "text": "The package is divided into a number of submodules each designed to provide a single, well-defined set of functions. The details of each specific module can be found on the relevant documentation page.Pages = [\n\"modules/constants.md\",\n\"modules/universe.md\",\n\"modules/time.md\",\n\"modules/reference_systems.md\",\n\"modules/attitude.md\",\n\"modules/coordinates.md\",\n\"modules/astrodynamics.md\",\n\"modules/orbit_dynamics.md\",\n\"modules/simulation.md\",\n]\nDepth = 2"
},

{
    "location": "#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": "The best way to learn how to use any software is to actually see it in action and use it for yourself. A number of tutorials showing how to use the modules provided as part of SatelliteDynamics.jl in your software are included as part of this documentation. You can find the list of tutorials below:Pages = [\n    \"tutorials/orbit_propagation_example.md\",\n]\nDepth = 2"
},

{
    "location": "#Citing-1",
    "page": "Home",
    "title": "Citing",
    "category": "section",
    "text": "The software in this package was developed as part of academic research. If you would like to help support it, please star the repository as such metrics on usage help guage interest, secure funding, and continue development. If you use the software as part of your research, teaching, or other activities, we would be grateful if you could cite our work."
},

{
    "location": "#Contributing-1",
    "page": "Home",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions are always welcome! For feature requests, questions, or if a bug is found please create a github issue."
},

{
    "location": "modules/constants/#",
    "page": "Constants",
    "title": "Constants",
    "category": "page",
    "text": ""
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.AS2RAD",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.AS2RAD",
    "category": "constant",
    "text": "Constant to convert arcseconds to radians. Equal to 2pi/(360*3600). [rad/as]\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.RAD2AS",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.RAD2AS",
    "category": "constant",
    "text": "Constant to convert radians to arcseconds. Equal to 2pi/(360*3600) [as/ras]\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.C_LIGHT",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.C_LIGHT",
    "category": "constant",
    "text": "Speed of light in vacuum. [m/s]\n\nD. Vallado, Fundamentals of Astrodynamics and Applications (4th Ed.), 2010\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.AU",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.AU",
    "category": "constant",
    "text": "Astronomical Unit. Equal to the mean distance of the Earth from the sun. TDB-compatible value. [m]\n\nP. Gérard and B. Luzum, IERS Technical Note 36, 2010\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.MJD_ZERO",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.MJD_ZERO",
    "category": "constant",
    "text": "Offset of Modified Julian Days representation with respect to Julian Days. For  a time, t, MJD_ZERO is equal to:\n\nMJD_ZERO = t_jd - t_mjd\n\nWhere tjd is the epoch represented in Julian Days, and tmjd is the epoch in Modified Julian Days.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.MJD2000",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.MJD2000",
    "category": "constant",
    "text": "Modified Julian Date of January 1, 2000 00:00:00. Value is independent of time scale.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GPS_TAI",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GPS_TAI",
    "category": "constant",
    "text": "Offset of GPS time system with respect to TAI time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.TAI_GPS",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.TAI_GPS",
    "category": "constant",
    "text": "Offset of TAI time system with respect to GPS time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.TT_TAI",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.TT_TAI",
    "category": "constant",
    "text": "Offset of TT time system with respect to TAI time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.TAI_TT",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.TAI_TT",
    "category": "constant",
    "text": "Offset of TAI time system with respect to TT time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GPS_TT",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GPS_TT",
    "category": "constant",
    "text": "Offset of GPS time system with respect to TT time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.TT_GPS",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.TT_GPS",
    "category": "constant",
    "text": "Offset of TT time system with respect to GPS time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GPS_ZERO",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GPS_ZERO",
    "category": "constant",
    "text": "Modified Julian Date of the start of the GPS time system in the GPS time system. This date was January 6, 1980 0H as reckond in the UTC time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.R_EARTH",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.R_EARTH",
    "category": "constant",
    "text": "Earth\'s equatorial radius. [m]\n\nGGM05s Gravity Model\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.WGS84_a",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.WGS84_a",
    "category": "constant",
    "text": "Earth\'s semi-major axis as defined by the WGS84 geodetic system. [m]\n\nNIMA Technical Report TR8350.2\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.WGS84_f",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.WGS84_f",
    "category": "constant",
    "text": "Earth\'s ellipsoidal flattening.  WGS84 Value.\n\nNIMA Technical Report TR8350.2\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_EARTH",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_EARTH",
    "category": "constant",
    "text": "Earth\'s Gravitational constant [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.e_EARTH",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.e_EARTH",
    "category": "constant",
    "text": "Earth\'s first eccentricity. WGS84 Value. [dimensionless]\n\nNIMA Technical Report TR8350.2\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.J2_EARTH",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.J2_EARTH",
    "category": "constant",
    "text": "Earth\'s first zonal harmonic. [dimensionless]\n\nGGM05s Gravity Model.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.OMEGA_EARTH",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.OMEGA_EARTH",
    "category": "constant",
    "text": "Earth axial rotation rate. [rad/s]\n\nD. Vallado, Fundamentals of Astrodynamics and Applications (4th Ed.), p. 222, 2010\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_SUN",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_SUN",
    "category": "constant",
    "text": "Gravitational constant of the Sun. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.R_SUN",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.R_SUN",
    "category": "constant",
    "text": "Nominal solar photospheric radius. [m]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.P_SUN",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.P_SUN",
    "category": "constant",
    "text": "Nominal solar radiation pressure at 1 AU. [N/m^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_MOON",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_MOON",
    "category": "constant",
    "text": "Gravitational constant of the Moon. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_MERCURY",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_MERCURY",
    "category": "constant",
    "text": "Gravitational constant of the Mercury. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_VENUS",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_VENUS",
    "category": "constant",
    "text": "Gravitational constant of the Venus. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_MARS",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_MARS",
    "category": "constant",
    "text": "Gravitational constant of the Mars. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_JUPITER",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_JUPITER",
    "category": "constant",
    "text": "Gravitational constant of the Jupiter. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_SATURN",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_SATURN",
    "category": "constant",
    "text": "Gravitational constant of the Saturn. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_URANUS",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_URANUS",
    "category": "constant",
    "text": "Gravitational constant of the Uranus. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_NEPTUNE",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_NEPTUNE",
    "category": "constant",
    "text": "Gravitational constant of the Neptune. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#SatelliteDynamics.Constants.GM_PLUTO",
    "page": "Constants",
    "title": "SatelliteDynamics.Constants.GM_PLUTO",
    "category": "constant",
    "text": "Gravitational constant of the Pluto. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "modules/constants/#Constants-1",
    "page": "Constants",
    "title": "Constants",
    "category": "section",
    "text": "The constants submodule constains common mathematical, physical, astronomical constants.AS2RAD\nRAD2AS\nC_LIGHT\nAU\nMJD_ZERO\nMJD2000\nGPS_TAI\nTAI_GPS\nTT_TAI\nTAI_TT\nGPS_TT\nTT_GPS\nGPS_ZERO\nR_EARTH\nWGS84_a\nWGS84_f\nGM_EARTH\ne_EARTH\nJ2_EARTH\nOMEGA_EARTH\nGM_SUN\nR_SUN\nP_SUN\nGM_MOON\nGM_MERCURY\nGM_VENUS\nGM_MARS\nGM_JUPITER\nGM_SATURN\nGM_URANUS\nGM_NEPTUNE\nGM_PLUTO"
},

{
    "location": "modules/universe/#",
    "page": "Universe",
    "title": "Universe",
    "category": "page",
    "text": ""
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.download_kp",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.download_kp",
    "category": "function",
    "text": "Download geomagnetic indices.\n\nArguments:\n\nyear_start::Int First year to download data for. Default: 2000\nyear_end::Int Last year to download data for. Default: 2019\n\nNotes:\n\nData source is GFZ Potsdam Geomagnetic WDC tables: https://www.gfz-potsdam.de/en/kp-index/\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.download_solar_flux",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.download_solar_flux",
    "category": "function",
    "text": "Download F10.7cm Solar Flux data.\n\n10.7cm solar flux is the standard measure of solar activity in space weather models.\n\nNotes:\n\nData source is NRC Canada solar flux tables: ftp://ftp.seismo.nrcan.gc.ca/spaceweather/solarflux/dailyflux_values/fluxtable.txt\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.download_all_data",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.download_all_data",
    "category": "function",
    "text": "Downloads package datafiles into folders $PACKAGE_ROOT/DIR\n\nDownloads the following files:\n\nIERS C04 IAU2000A Earth Orientation Data\nIERS C04 IAU1980 Earth Orientation Data\nIERS Bulletin A/B IAU2000 Earth Orientation Data\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.EarthOrientationData",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.EarthOrientationData",
    "category": "type",
    "text": "The EarthOrientationData constains a single data member of type  Dict{Int, Tuple{Float64, Float64, Float64}} that stores the Earth Orientation parameters UT1-UTC, xp, and yp whose units are meters,  radians, and radians, respectively. xp and yp are the x- and  y-components of Earth\'s polar motion. The dictionary key is the Epoch the  parameters are for as a Modified Julian Day at 0h UTC.\n\nArguments:\n\nproduct::Symbol The IERS product type can be :C04_14, :C04_80, or :FINALS_2000\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.EOP",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.EOP",
    "category": "constant",
    "text": "Module-wide global EarthOrientationData object. This data object is used as the default source of Earth Orientation Data by reference system transformations if no explicit EarthOrientationData file is provided to those transformations.\n\nThis value can be overridden in your own code as follows:\n\nSatelliteDynamics.EOP = EarthOrientationData(:EOP_PRODUCT_CHOICE)\n\nThis global variable defaults to use the module\'s internal version of :FINALS_2000  if it is not otherwise set/provided.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.UT1_UTC",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.UT1_UTC",
    "category": "function",
    "text": "Compute the offset between the UT1 and UTC time systems in seconds. If the EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the UT1-UTC offset is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\nut1_utc::Float UT1 - UTC offset. [s] \n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.POLE_LOCATOR",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.POLE_LOCATOR",
    "category": "function",
    "text": "Compute the location of the pole. Returns x- and y- components as a tuple with the units of [radians].  If the EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the pole locator is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\npole_locator::Tuple{ -Float, Float} (x, y) pole location in radians.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.XP",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.XP",
    "category": "function",
    "text": "Compute the x-component of the pole locator in [radians]. If the first EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the xp value is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\nxp::Float x-component of pole locator in radians.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.YP",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.YP",
    "category": "function",
    "text": "Compute the y-component of the pole locator in [radians]. If the first EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the yp value is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\nyp::Float y-component of pole locator in radians.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.set_eop",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.set_eop",
    "category": "function",
    "text": "Set Earth orientation data values for a specific date in the module global EarthOrientationData object.\n\nArguments:\n\nmjd::Real Modified Julian Date in UTC of the Epoch for which the Earth orientation data is aligned to.\nut1_utc::Real Offset between UT1 and UTC in seconds.\nxp::Real x-component of the pole locator in radians.\nyp::Real y-component of the pole locator in radians.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.load_eop",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.load_eop",
    "category": "function",
    "text": "Load new Earth orientation data into the module global EarthOrientationData object. The product can be one of the symbols: :C04_14, :C04_80, or :FINALS_2000.\n\nArguments:\n\nproduct::Symbol Loads a different set of EarthOrientationData values into the module-wide global EarthOrientationData parameters.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.GravModel",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.GravModel",
    "category": "type",
    "text": "GravModel stores a spherical harmonic gravity field in memory. Can store normalized or denomalized coefficients. Package contains EGM2008, GGM01S, and GGM0S gravity models, as well as the default gravity model of EGM2008 truncated to degree and order 90.\n\nAdditional gravity field models can be downloaded from: http://icgem.gfz-potsdam.de/home\n\nArguments:\n\nfilepath::string Path to spherical harmonic gravity model file.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.GRAVITY_MODEL",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.GRAVITY_MODEL",
    "category": "constant",
    "text": "Module-wide global GravityModel object. This data object is used as the default spherical harmonic gravity field unless one is otherwise provided.\n\nThis value can be overridden in your own code as follows:\n\nSatelliteDynamics.GravityModel = GravityModel(PATH_TO_YOUR_GRAVITY_MODEL)\n\nThis global variable defaults to use the module\'s internal version of the EGM2008 model truncated to order and degree 90, if it is not otherwise set.\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#SatelliteDynamics.Universe.load_gravity_model",
    "page": "Universe",
    "title": "SatelliteDynamics.Universe.load_gravity_model",
    "category": "function",
    "text": "Load new gravity model into module global EarthOrientationData object. The product can be one of the symbols: :EGM2008_20, :EGM2008_90, :GGM01S, :GGM05S, or the filepath to a text-encoded gravity model file.\n\nArguments:\n\ngfc_file::String File path of gravity field model\nproduct_name::Symbol OR a symbol of a known gravity field product. Valid ones are: :EGM2008_20, :EGM2008_90, :GGM01S, :GGM05S\n\n\n\n\n\n"
},

{
    "location": "modules/universe/#Universe-1",
    "page": "Universe",
    "title": "Universe",
    "category": "section",
    "text": "The Universe submodule defines simulation-specific data files which are constants  of most simulations. In particular it provides data structures for storing and accessing Earth orientation parameters and spherical harmonic gravity field  models.The module defines the global variables EOP and GRAVITY_MODEL which load default data values at runtime.EOP defaults to use the rapid Earth orientation data file finals.all (IAU 2000) distributed by the IERS. The module also supports IERS C04 product files.GRAVITY_MODEL defaults to use the EGM2008 spherical harmonic gravity model,  truncated to order and degree 90.All data files in the module can be updated by running the command download_all_data() in the Julia REPL.download_kp\ndownload_solar_flux\ndownload_all_data\nEarthOrientationData\nEOP\nUT1_UTC\nPOLE_LOCATOR\nXP\nYP\nset_eop\nload_eop\nGravModel\nGRAVITY_MODEL\nload_gravity_model"
},

{
    "location": "modules/time/#",
    "page": "Time",
    "title": "Time",
    "category": "page",
    "text": ""
},

{
    "location": "modules/time/#SatelliteDynamics.Time.caldate_to_mjd",
    "page": "Time",
    "title": "SatelliteDynamics.Time.caldate_to_mjd",
    "category": "function",
    "text": "Convert a Gregorian calendar date to the equivalent Modified Julian Date representation of that time instant.\n\nAguments:\n\nyear::Integer Year\nyear::Integer Month\nyear::Integer Day\nhour::Integer Hour\nminute::Integer Minute \nsecond::Real Seconds\nnanoseconds::Real Nanoseconds\n\nReturns:\n\nmjd::Float64 Modified Julian Date of Epoch\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.mjd_to_caldate",
    "page": "Time",
    "title": "SatelliteDynamics.Time.mjd_to_caldate",
    "category": "function",
    "text": "Convert a Modified Julian Date to the equivalent Gregorian calendar date representation of the same instant in time.\n\nAguments:\n\nmjd::Real: Modified Julian Date of Epoch\n\nReturns:\n\nyear::Int: Year\nyear::Int: Month\nyear::Int: Day\nhour::Int: Hour\nminute::Int: Minute \nsecond::Float64: Seconds\nnanoseconds::Float64: Nanoseconds\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.caldate_to_jd",
    "page": "Time",
    "title": "SatelliteDynamics.Time.caldate_to_jd",
    "category": "function",
    "text": "Convert a Gregorian calendar date to the equivalent Julian Date representation of that time instant.\n\nAguments:\n\nyear::Integer: Year\nyear::Integer: Month\nyear::Integer: Day\nhour::Integer: Hour\nminute::Integer: Minute \nsecond::Real: Seconds\nnanoseconds::Real: Nanoseconds\n\nReturns:\n\nmjd::Float64: Julian Date of Epoch\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.jd_to_caldate",
    "page": "Time",
    "title": "SatelliteDynamics.Time.jd_to_caldate",
    "category": "function",
    "text": "Convert a Julian Date to the equivalent Gregorian calendar date representation of the same instant in time.\n\nAguments:\n\njd::Real: Julian Date of Epoch\n\nReturns:\n\nyear::Int: Year\nyear::Int: Month\nyear::Int: Day\nhour::Int: Hour\nminute::Int: Minute \nsecond::Float64: Seconds\nmicrosecond::Float64: Nanoseconds\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.elapsed_from_epoch",
    "page": "Time",
    "title": "SatelliteDynamics.Time.elapsed_from_epoch",
    "category": "function",
    "text": "Compute the number of elapsed seconds since a given Epoch from the day number. Can be used to compute the elapsed time since a given Julian or Modified Julian Date.\n\nArguments:\n\nday_number::Real: Day number, can contain fractional days. Asummes all days are a uniform 86400.0 seconds in length.\nday_epoch::Real: Modified Julian Date of Epoch\n\nReturns:\n\nt::Float: Number of elapsed seconds between the Provided Modified   Julian date and the epoch.\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.days_from_elapsed",
    "page": "Time",
    "title": "SatelliteDynamics.Time.days_from_elapsed",
    "category": "function",
    "text": "Computes the day number in a given time scale given the elapsed time since epoch and the epoch itself.\n\nAssumes all days are counted using a uniform 86400.0 seconds over the time span.\n\nArguments:\n\nt::Real: Elapsed seconds since the day_epoch.\nday_epoch::Real: Day number of the epoch. Common values are SatelliteDynamics.Constants.MJD_ZERO (to get the Julian Day number) or SatelliteDynamics.Constants.MJD2000 (to get Modified Julian Days if reckoning time from January 1, 2000 0H)\n\nReturns:\n\ndays::Float: Number of elapsed days in the time scale.\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.time_system_offset",
    "page": "Time",
    "title": "SatelliteDynamics.Time.time_system_offset",
    "category": "function",
    "text": "Compute the offset between two time systems at a given Epoch.\n\nThe offset (in seconds) is computed as:\n\ntime_system_offset = tsys_dest - tsys_src\n\nThe value returned is the number of seconds that musted be added to the source time system given the input epoch, to get the equivalent epoch.\n\nConversions are accomplished using SOFA C library calls. Epoch.\n\nArguments:\n\njd::Real: Part 1 of two-part date (Julian days)\nfd::Real: Part 2 of two-part date (Fractional days)\ntsys_src::Symbol: Base time system\ntsys_dest::Symbol: Destination time system\n\nReturns:\n\noffset::Float: Offset between soruce and destination time systems in seconds.\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.Epoch",
    "page": "Time",
    "title": "SatelliteDynamics.Time.Epoch",
    "category": "type",
    "text": "The Epoch type represents a single instant in time. It is used throughout the SatelliteDynamics module. It is meant to provide a clear definition of moments in time and provide a convenient interface display time in various representations as well as in differrent time systems. The internal data members are also chosen such that the representation maintains nanosecond-precision in reprersenation of time and doesn\'t accumulate floating-point arithmetic errors larger than nanoseconds even after centuries.\n\nSupports +, +=, -, and -= operators. Two Epoch\'s can be differenced to return the time difference between two Epochs. If adding a Real number it is interpreted as an offset in seconds to add to the Epoch.\n\nThe class also supports all arithmetic operators: ==, !=, <, <=, >, >=\n\nArguments:\n\nyear::Int Year\nyear::Int Month\nyear::Int Day\nhour::Int Hour (optional)\nminute::Int Minute (optional)\nsecond::Real Seconds (optional)\nnanoseconds::Real Nanoseconds (optional)\ntsys::Symbol: Time system of the epoch at initialization\n\nThe Epoch class can be also be initialized from a string. Examples of Valid String constructors are: \n\nepc = Epoch(\"2018-12-20\")\nepc = Epoch(\"2018-12-20T16:22:19.0Z\")\nepc = Epoch(\"2018-12-20T16:22:19.123Z\")\nepc = Epoch(\"2018-12-20T16:22:19.123456789Z\")\nepc = Epoch(\"2018-12-20T16:22:19Z\")\nepc = Epoch(\"20181220T162219Z\")\nepc = Epoch(\"2018-12-01 16:22:19 GPS\")\nepc = Epoch(\"2018-12-01 16:22:19.0 GPS\")\nepc = Epoch(\"2018-12-01 16:22:19.123 GPS\")\nepc = Epoch(\"2018-12-01 16:22:19.123456789 GPS\")\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.caldate",
    "page": "Time",
    "title": "SatelliteDynamics.Time.caldate",
    "category": "function",
    "text": "Return the Gregorian calendar date for a specific \n\nArguments:\n\nepc::Epoch: Input epoch\ntsys::Symbol: Time system to compute output in.\n\nReturns:\n\nyear::Int: Year of epoch\nmonth::Int: Month of epoch\nday::Int: Day of epoch\nhour::Int: Hour of epoch\nminute::Int: Minute of epoch\nsecond::Int: Second of epoch\nnanoseconds::Int: Year of epoch\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.jd",
    "page": "Time",
    "title": "SatelliteDynamics.Time.jd",
    "category": "function",
    "text": "Compute the Julian Date for a specific epoch\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\njd::Real: Julian date of the epoch in the requested time system\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.mjd",
    "page": "Time",
    "title": "SatelliteDynamics.Time.mjd",
    "category": "function",
    "text": "Compute the Modified Julian Date for a specific epoch\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\nmjd::Real: Julian date of the epoch in the requested time system\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.day_of_year",
    "page": "Time",
    "title": "SatelliteDynamics.Time.day_of_year",
    "category": "function",
    "text": "Return the day-of-year number for a given Epoch. \n\nJanuary 1 0h of each year will return 1.\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\ndoy::Real: Day of year number. \n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.gmst",
    "page": "Time",
    "title": "SatelliteDynamics.Time.gmst",
    "category": "function",
    "text": "Compute the Greenwich Mean Sidereal Time for the given Epoch.\n\nArguments:\n\nepc::Epoch: Epoch\nuse_degrees::Bool: Return output in degrees (Default: false)\n\nReturns:\n\ngmst::Real: Greenwich Mean Sidereal Time [rad/deg]\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.gast",
    "page": "Time",
    "title": "SatelliteDynamics.Time.gast",
    "category": "function",
    "text": "Compute the Greenwich Mean Sidereal Time for the given Epoch.\n\nArguments:\n\nepc::Epoch: Epoch\nuse_degrees::Bool: Return output in degrees (Default: false)\n\nReturns:\n\ngast::Real: Greenwich Apparent Sidereal Time [rad/deg]\n\n\n\n\n\n"
},

{
    "location": "modules/time/#SatelliteDynamics.Time.epoch_to_jdfd",
    "page": "Time",
    "title": "SatelliteDynamics.Time.epoch_to_jdfd",
    "category": "function",
    "text": "Compute the two-part date format used by SOFA.jl functions forr a given Epoch.\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\nd1::Real: First part of two part date. [days]\nd2::Real: Second part of two part date. [days]\n\n\n\n\n\n"
},

{
    "location": "modules/time/#Time-1",
    "page": "Time",
    "title": "Time",
    "category": "section",
    "text": "The Time submodule contains common time transformations such as converting between different date representations or converting a specific instant in time between different time systems.The module also defines the Epoch class which provides the standard representation of instants in time used throughout the module. Most of the transformations are make backend calls to the SOFA C-library functions provide the package SOFA.jlcaldate_to_mjd\nmjd_to_caldate\ncaldate_to_jd\njd_to_caldate\nelapsed_from_epoch\ndays_from_elapsed\ntime_system_offset\nEpoch\ncaldate\njd\nmjd\nday_of_year\ngmst\ngast\nepoch_to_jdfd"
},

{
    "location": "modules/reference_systems/#",
    "page": "Reference Systems",
    "title": "Reference Systems",
    "category": "page",
    "text": ""
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.rRTNtoECI",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.rRTNtoECI",
    "category": "function",
    "text": "Compute the radial, along-track, cross-track (RTN) rotation matrix. Which, if applied to a position vector in the RTN frame, will transform that vector to beinto the equivalent relative position in the ECI frame.\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nR_rtn_to_eci::Array{<:Real, 1}: Rotation matrix transforming from the RTN frame to the ECI frame.\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.rECItoRTN",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.rECItoRTN",
    "category": "function",
    "text": "Compute the Earth-centered inertial to radial, along-track, cross-track (RTN)  rotation matrix. Which, if applied to a position vector in the ECI frame, will  transform that vector into the equivalent position vector in the RTN frame.\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nR_eci_to_rtn::Array{<:Real, 1}: Rotation matrix transforming from the ECI frame to the RTN frame.\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.sECItoRTN",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.sECItoRTN",
    "category": "function",
    "text": "Compute the radial, along-track, cross-track (RTN) coordinates of a target satellite in the primary satellites RTN frame.\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nrtn::Array{<:Real, 1}: Position and velocity of the target relative of the observing satellite in the RTN.\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.sRTNtoECI",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.sRTNtoECI",
    "category": "function",
    "text": "Compute the Earth-center\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nrtn::Array{<:Real, 1}: Position and velocity of the target relative of the observing satellite in the RTN.\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.bias_precession_nutation",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.bias_precession_nutation",
    "category": "function",
    "text": "Computes the Bias-Precession-Nutation matrix transforming the GCRS to the  CIRS intermediate reference frame. This transformation corrects for the  bias, precession, and nutation of Celestial Intermediate Origin (CIO) with respect to inertial space.\n\nArguments:\n\nepc::Epoch: Epoch of transformation\n\nReturns:\n\nrc2i::Array{<:Real, 2}: 3x3 Rotation matrix transforming GCRS -> CIRS\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.earth_rotation",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.earth_rotation",
    "category": "function",
    "text": "Computes the Earth rotation matrix transforming the CIRS to the TIRS intermediate reference frame. This transformation corrects for the Earth rotation.\n\nArguments:\n\nepc::Epoch: Epoch of transformation\n\nReturns:\n\nr::Array{<:Real, 2}: 3x3 Rotation matrix transforming CIRS -> TIRS\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.polar_motion",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.polar_motion",
    "category": "function",
    "text": "Computes the Earth rotation matrix transforming the TIRS to the ITRF reference  frame.\n\nArguments\n\nepc::Epoch: Epoch of transformation\n\nReturns\n\nrpm::Array{<:Real, 2}: 3x3 Rotation matrix transforming TIRS -> ITRF\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.rECItoECEF",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.rECItoECEF",
    "category": "function",
    "text": "Computes the combined rotation matrix from the inertial to the Earth-fixed reference frame. Applies corrections for bias, precession, nutation, Earth-rotation, and polar motion.\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\n\nReturns\n\nr::Array{<:Real, 2}: 3x3 Rotation matrix transforming GCRF -> ITRF\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.rECEFtoECI",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.rECEFtoECI",
    "category": "function",
    "text": "Computes the combined rotation matrix from the Earth-fixed to the inertial reference frame. Applies corrections for bias, precession, nutation, Earth-rotation, and polar motion.\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\n\nReturns\n\nr::Array{<:Real, 1}: 3x3 Rotation matrix transforming ITRF -> GCRF\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.sECItoECEF",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.sECItoECEF",
    "category": "function",
    "text": "Transforms an Earth inertial state into an Earth fixed state\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\nx::Array{<:Real, 1}: Inertial state (position, velocity) [m; m/s]\n\nReturns\n\nx_ecef::Array{<:Real, 1}: Earth-fixed state (position, velocity)\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#SatelliteDynamics.ReferenceSystems.sECEFtoECI",
    "page": "Reference Systems",
    "title": "SatelliteDynamics.ReferenceSystems.sECEFtoECI",
    "category": "function",
    "text": "Transforms an Earth fixed state into an Inertial state\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\nx::Array{<:Real, 1}: Earth-fixed state (position, velocity) [m; m/s]\n\nReturns\n\nx_ecef::Array{<:Real, 1}: Inertial state (position, velocity)\n\n\n\n\n\n"
},

{
    "location": "modules/reference_systems/#ReferenceSystems-1",
    "page": "Reference Systems",
    "title": "ReferenceSystems",
    "category": "section",
    "text": "The ReferenceSystems submodule contains precision transformations between common standard reference systems.Currently only Earth-based reference systems are supported.Most of the transformations are make backend calls to the SOFA C-library functions provide the package SOFA.jlrRTNtoECI\nrECItoRTN\nsECItoRTN\nsRTNtoECI\nbias_precession_nutation\nearth_rotation\npolar_motion\nrECItoECEF\nrECEFtoECI\nsECItoECEF\nsECEFtoECI"
},

{
    "location": "modules/attitude/#",
    "page": "Attitude",
    "title": "Attitude",
    "category": "page",
    "text": ""
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.Rx",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.Rx",
    "category": "function",
    "text": "Rotation matrix, for a rotation about the x-axis.\n\nArguments:\n\nangle::Real: Counter-clockwise angle of rotation as viewed looking back along the postive direction of the rotation axis.\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\nr::Array{<:Real, 2}: Rotation matrix\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.27.\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.Ry",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.Ry",
    "category": "function",
    "text": "Rotation matrix, for a rotation about the y-axis.\n\nArguments:\n\nangle::Real: Counter-clockwise angle of rotation as viewed looking back along the postive direction of the rotation axis.\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\nr::Array{<:Real, 2}: Rotation matrix\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.27.\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.Rz",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.Rz",
    "category": "function",
    "text": "Rotation matrix, for a rotation about the z-axis.\n\nArguments:\n\nangle::Real: Counter-clockwise angle of rotation as viewed looking back along the postive direction of the rotation axis.\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\nr::Array{<:Real, 2}: Rotation matrix\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.27.\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#Attitude-1",
    "page": "Attitude",
    "title": "Attitude",
    "category": "section",
    "text": "The attitude module contains function for common attitude operations, different attitude representations (Quaternions, Euler Angles, Euler Axis & Angle, Rotation  Matrices), and transformations between different attitude representations.Rx\nRy\nRz"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.Quaternion",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.Quaternion",
    "category": "type",
    "text": "The Quaternion type defines a scalar-first quaternion for representation of attitude.\n\nData members:\n\nq0::Float64: Scalar part of quaternion\nq1::Float64: First vector component of quaternion\nq2::Float64: Second vector component of quaternion\nq3::Float64: Third vector component of quaternion\n\nReferences:\n\nJ. Diebel, Representing attitude: Euler angles, unit quaternions, and rotation vectors. Matrix 58(15-16) (2006).\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.as_vector",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.as_vector",
    "category": "function",
    "text": "Return quaternion as a vector. \n\nEquivalent to q[:]\n\nArguments:\n\nq::Quaternion: Quaternion\n\nReturns:\n\nvec::Array{Float64, 1}: Quaternion as a (4,) vector\n\n\n\n\n\nReturn Euler angles as a vector.\n\nEquivalent to: [e.phi, e.theta, e.psi] for EulerAngle e\n\nArguments:\n\ne::EulerAngle Euler Angle\n\nReturns:\n\nevec::Array{Float64, 1} Euler angles components in vector form.\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.as_matrix",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.as_matrix",
    "category": "function",
    "text": "Return the rotation matrix representation of a Quaternion.\n\nArguments:\n\nq::Quaternion: Quaternion\n\nReturns:\n\nmat::Array{Float64, 2}: Rotation Matrix on SO(3).\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.slerp",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.slerp",
    "category": "function",
    "text": "Perform spherical linear interpolation (SLERP) on two quaternions. Interpolatles  from quaternion, q1, to quaternion, q2, at normalized interpolation time, t.\n\nInterpolation time must be in the range [0, 1] a value of 0 will return q1, while a value of 1 will return q2.\n\nArguments:\n\nq1::Quaternion: Starting Quaternion\nq2::Quaternion: Ending Quaternion\nt::Real: Normalized interpolation time. [0, 1]\n\nReturns:\n\nq:Quaternion: Quaternion attitude interpolation from q1 toward q2 at time t.\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#Quaternions-1",
    "page": "Attitude",
    "title": "Quaternions",
    "category": "section",
    "text": "Quaternion\nas_vector\nas_matrix\nslerp"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.EulerAngle",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.EulerAngle",
    "category": "type",
    "text": "The EulerAngle type provides a represenation of EulerAngles for storing attitude information.\n\nValid sequences are: 121, 123, 131, 132, 212, 213, 231, 232, 312, 313, 321, 323.\n\nData members:\n\nseq::Symbol: Order of application of angles with respect to body axis.\nphi::Float64: First Euler angle\ntheta::Float64: Second Euler angle\npsi::Float64: Third Euler angle\n\nReferences:\n\nJ. Diebel, Representing attitude: Euler angles, unit quaternions, and rotation vectors. Matrix 58(15-16) (2006).\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#EulerAngle-1",
    "page": "Attitude",
    "title": "EulerAngle",
    "category": "section",
    "text": "EulerAngle"
},

{
    "location": "modules/attitude/#SatelliteDynamics.Attitude.EulerAxis",
    "page": "Attitude",
    "title": "SatelliteDynamics.Attitude.EulerAxis",
    "category": "type",
    "text": "The EulerAxis type provides a representation of the Euler angle-and-axis attitude representation.\n\nData members:\n\ntheta::Float64: Angle of rotation\nvec::Array{Float64, 1}: Axis of rotation\n\nReferences:\n\nJ. Diebel, Representing attitude: Euler angles, unit quaternions, and rotation vectors. Matrix 58(15-16) (2006).\n\n\n\n\n\n"
},

{
    "location": "modules/attitude/#EulerAxis-1",
    "page": "Attitude",
    "title": "EulerAxis",
    "category": "section",
    "text": "EulerAxis"
},

{
    "location": "modules/coordinates/#",
    "page": "Coordinates",
    "title": "Coordinates",
    "category": "page",
    "text": ""
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sGEOCtoECEF",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sGEOCtoECEF",
    "category": "function",
    "text": "Convert geocentric position to equivalent Earth-fixed position.\n\nArguments:\n\ngeoc::Array{<:Real, 1}: Geocentric coordinates (lon, lat, altitude) [rad] / [deg]\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\necef::Array{<:Real, 1}: Earth-fixed coordinates [m]\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sECEFtoGEOC",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sECEFtoGEOC",
    "category": "function",
    "text": "Convert Earth-fixed position to geocentric location.\n\nArguments:\n\necef::Array{<:Real, 1}: Earth-fixed coordinated [m]\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\ngeoc: Geocentric coordinates (lon, lat, altitude) [rad] / [deg]\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sGEODtoECEF",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sGEODtoECEF",
    "category": "function",
    "text": "Convert geodetic position to equivalent Earth-fixed position.\n\nArguments:\n\ngeod::Array{<:Real, 1}: Geodetic coordinates (lon, lat, altitude) [rad] / [deg]\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\necef::Array{<:Real, 1}: Earth-fixed coordinates [m]\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sECEFtoGEOD",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sECEFtoGEOD",
    "category": "function",
    "text": "Convert geodetic coordinaties to Earth-fixed position\n\nArguments:\n\necef::Array{<:Real, 1}: Earth-fixed position [m]\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\ngeod::Array{<:Real, 1}: Geocentric coordinates (lon, lat, altitude) [rad] / [deg]\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.rECEFtoENZ",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.rECEFtoENZ",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the East-North-Up coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Real, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.rENZtoECEF",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.rENZtoECEF",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the South-East-Zenith  coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sECEFtoENZ",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sECEFtoENZ",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\necef::Array{<:Real, 1}: Coordinates of the object in Earth-fixed station\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sENZtoECEF",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sENZtoECEF",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nsez::Array{<:Real, 1}: SEZ coordinates of the object\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.rECEFtoSEZ",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.rECEFtoSEZ",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the South-East-Zenith  coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.rSEZtoECEF",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.rSEZtoECEF",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the South-East-Zenith  coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sECEFtoSEZ",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sECEFtoSEZ",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\necef::Array{<:Real, 1}: Coordinates of the object in Earth-fixed station\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sSEZtoECEF",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sSEZtoECEF",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nsez::Array{<:Real, 1}: SEZ coordinates of the object\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sENZtoAZEL",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sENZtoAZEL",
    "category": "function",
    "text": "Convert East-North-Zenith topocentric state to azimuth, elevation, and range.\n\nArguments:\n\nx::Array{<:Real, 1}: East-North-Up state\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\nazel::Array{<:Real, 1}: Azimuth, elevation and range [rad; rad; m]\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#SatelliteDynamics.Coordinates.sSEZtoAZEL",
    "page": "Coordinates",
    "title": "SatelliteDynamics.Coordinates.sSEZtoAZEL",
    "category": "function",
    "text": "Convert South-East-Zenith topocentric state to azimuth, elevation, and range.\n\nArguments:\n\nx::Array{<:Real, 1}: South-East-Zenith state\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\nazel::Array{<:Real, 1}: Azimuth, elevation and range [rad; rad; m]\n\n\n\n\n\n"
},

{
    "location": "modules/coordinates/#Coordinates-1",
    "page": "Coordinates",
    "title": "Coordinates",
    "category": "section",
    "text": "The coordiantes module provides functionatiy for transforming between various body-fixed reference frame coordinate systems. In particular, geodetic and geocentric transformations are included. Topocentric transformations are also included.sGEOCtoECEF\nsECEFtoGEOC\nsGEODtoECEF\nsECEFtoGEOD\nrECEFtoENZ\nrENZtoECEF\nsECEFtoENZ\nsENZtoECEF\nrECEFtoSEZ\nrSEZtoECEF\nsECEFtoSEZ\nsSEZtoECEF\nsENZtoAZEL\nsSEZtoAZEL"
},

{
    "location": "modules/astrodynamics/#",
    "page": "Astrodynamics",
    "title": "Astrodynamics",
    "category": "page",
    "text": ""
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.mean_motion",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.mean_motion",
    "category": "function",
    "text": "Compute the mean motion given a semi-major axis.\n\nArguments:\n\na::Real: Semi-major axis. [m]\nuse_degrees:Bool: If true returns result in units of degrees\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns:\n\nn::Real: Orbital mean motion. [rad/s] or [deg/s]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.semimajor_axis",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.semimajor_axis",
    "category": "function",
    "text": "Calculate semi-major axis given mean-motion.\n\nArguments:\n\nn::Real: Orbital mean motion. [rad/s] or [deg/s]\nuse_degrees:Bool: If true interpret input as being in degrees.\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns:\n\na::Real: Semi-major axis. [m]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.orbit_period",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.orbit_period",
    "category": "function",
    "text": "Compute the satellite orbital period given the semi-major axis.\n\nArguments:\n\na::Real: Semi-major axis. [m]\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns:\n\nT::Real: Orbital period. [s]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.sun_sync_inclination",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.sun_sync_inclination",
    "category": "function",
    "text": "Compute the required inclination for a Sun-synchronous Earth orbit.\n\nAlgorithm assumes the nodal precession is entirely due to the J2 perturbation, and no other perturbations are considered.\n\nThe inclination is computed using a first-order, non-iterative approximation.\n\nArguments:\n\na::Real: Semi-major axis. [m]\ne::Real: Eccentricity. [dimensionless]\nuse_degrees:Bool: If true interpret output will be returned in degrees.\n\nReturns:\n\niss::Real: Requierd inclination for a sun-synchronous orbit. [rad] or [deg]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.anomaly_eccentric_to_mean",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.anomaly_eccentric_to_mean",
    "category": "function",
    "text": "Convert eccentric anomaly into mean anomaly.\n\nArguments:\n\nE::Real: Eccentric anomaly. [rad] or [deg]\ne::Real: Eccentricity. [dimensionless]\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\n\nReturns:\n\nM::Real: Mean anomaly. [rad] or [deg]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.anomaly_mean_to_eccentric",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.anomaly_mean_to_eccentric",
    "category": "function",
    "text": "Convert mean anomaly into eccentric anomaly.\n\nArguments:\n\nM::Real: Mean anomaly. [deg] or [deg]\ne::Real: Eccentricity. [dimensionless]\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\n\nReturns:\n\nE::Real: Eccentric anomaly. [rad] or [deg]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.sOSCtoCART",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.sOSCtoCART",
    "category": "function",
    "text": "Given an orbital state expressed in osculating orbital elements compute the equivalent Cartesean position and velocity of the inertial state.\n\nThe osculating elements are assumed to be (in order):\n\na, Semi-major axis [m]\ne, Eccentricity [dimensionless]\ni, Inclination [rad]\nΩ, Right Ascension of the Ascending Node (RAAN) [rad]\nω, Argument of Perigee [ramd]\nM, Mean anomaly [rad]\n\nArguments:\n\nx_oe x::Array{<:Real, 1}: Osculating orbital elements. See above for desription of the elements and their required order.\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns\n\nx x::Array{<:Real, 1}: Cartesean inertial state. Returns position and velocity. [m; m/s]\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#SatelliteDynamics.Astrodynamics.sCARTtoOSC",
    "page": "Astrodynamics",
    "title": "SatelliteDynamics.Astrodynamics.sCARTtoOSC",
    "category": "function",
    "text": "Given a Cartesean position and velocity in the inertial frame, return the  state expressed in terms of  osculating orbital elements.\n\nThe osculating elements are assumed to be (in order):\n\na, Semi-major axis [m]\ne, Eccentricity [dimensionless]\ni, Inclination [rad]\nΩ, Right Ascension of the Ascending Node (RAAN) [rad]\nω, Argument of Perigee [ramd]\nM, Mean anomaly [rad]\n\nArguments:\n\nx x::Array{<:Real, 1}: Cartesean inertial state. Returns position and velocity. [m; m/s]\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns\n\nx_oe x::Array{<:Real, 1}: Osculating orbital elements. See above for desription of the elements and their required order.\n\n\n\n\n\n"
},

{
    "location": "modules/astrodynamics/#Astrodynamics-1",
    "page": "Astrodynamics",
    "title": "Astrodynamics",
    "category": "section",
    "text": "The Astrodynamics submodule provides functions, state representations, and  transformations common to the field of astrodynamics.mean_motion\nsemimajor_axis\norbit_period\nsun_sync_inclination\nanomaly_eccentric_to_mean\nanomaly_mean_to_eccentric\nsOSCtoCART\nsCARTtoOSC"
},

{
    "location": "modules/orbit_dynamics/#",
    "page": "Orbit Dynamics",
    "title": "Orbit Dynamics",
    "category": "page",
    "text": ""
},

{
    "location": "modules/orbit_dynamics/#OrbitDynamics-1",
    "page": "Orbit Dynamics",
    "title": "OrbitDynamics",
    "category": "section",
    "text": "The OrbitDynamics module provides implementations of various force and orbit perturbation models used in orbit simulation.deriv_orbit_earth\naccel_point_mass\naccel_gravity\nsun_position\nmoon_position\naccel_thirdbody_sun\naccel_thirdbody_moon\ndensity_harris_priester\naccel_drag\neclipse_cylindrical\neclipse_conical\naccel_srp\naccel_relativity"
},

{
    "location": "modules/function_index/#",
    "page": "Function Index",
    "title": "Function Index",
    "category": "page",
    "text": ""
},

{
    "location": "modules/function_index/#Function-Library-1",
    "page": "Function Index",
    "title": "Function Library",
    "category": "section",
    "text": ""
},

{
    "location": "modules/function_index/#Constants-1",
    "page": "Function Index",
    "title": "Constants",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Constants]"
},

{
    "location": "modules/function_index/#Universe-1",
    "page": "Function Index",
    "title": "Universe",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Universe]"
},

{
    "location": "modules/function_index/#Time-1",
    "page": "Function Index",
    "title": "Time",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Time]"
},

{
    "location": "modules/function_index/#Reference-Systems-1",
    "page": "Function Index",
    "title": "Reference Systems",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.ReferenceSystems]"
},

{
    "location": "modules/function_index/#Attitude-1",
    "page": "Function Index",
    "title": "Attitude",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Attitude]"
},

{
    "location": "modules/function_index/#Coordinates-1",
    "page": "Function Index",
    "title": "Coordinates",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Coordinates]"
},

{
    "location": "modules/function_index/#Astrodynamics-1",
    "page": "Function Index",
    "title": "Astrodynamics",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Astrodynamics]"
},

{
    "location": "modules/function_index/#Orbit-Dynamics-1",
    "page": "Function Index",
    "title": "Orbit Dynamics",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.OrbitDynamics]"
},

{
    "location": "modules/function_index/#Simulation-1",
    "page": "Function Index",
    "title": "Simulation",
    "category": "section",
    "text": "Modules = [SatelliteDynamics.Simulation]"
},

{
    "location": "modules/earth_environment/space_weather/#",
    "page": "Space Weather",
    "title": "Space Weather",
    "category": "page",
    "text": ""
},

{
    "location": "modules/earth_environment/space_weather/#Space-Weather-1",
    "page": "Space Weather",
    "title": "Space Weather",
    "category": "section",
    "text": "The Space Weather submodule provides classes to store and access space weather  data files. In particular Solar Flux and Geomagnetic index data.The module defines the global variables GEOMAGNETIC_DATA and SOLAR_FLUX_DATA which are loaded at runtime and GEOMAGNETIC_DATA stores Geomagnetic Kp and Ap indicies used in models of  Earth\'s atmosphere.SOLAR_FLUX_DATA stores F10.7 cm solar flux data which is a measurement of  solar activity and another input to most atmospheric models.GeomagneticIndexData\nGEOMAGNETIC_DATA\nKpIndices\nKpIndex\nKpDailyIndex\nApIndices\nApIndex\nApDailyIndex\nSolarFluxData\nSOLAR_FLUX_DATA\nf107Data\nf107Observed\nf107Adjusted\nf107ObservedAvg\nf107AdjustedAvg"
},

{
    "location": "modules/earth_environment/nrlmsise00/#",
    "page": "NRLMSISE00",
    "title": "NRLMSISE00",
    "category": "page",
    "text": ""
},

{
    "location": "modules/earth_environment/nrlmsise00/#NRLMSISE00-1",
    "page": "NRLMSISE00",
    "title": "NRLMSISE00",
    "category": "section",
    "text": "The NRLMSISE00 module provides a pure-Julia implementation of the NRLMSISE00  Earth atmospheric model.The implementation is based off of Daniel Brodo\'s C implementation which can be  found here.Most of the module code is for purple internal only. The density should only be retrieved through the density_nrlmsise00 function which will properly  compute the required model inputs for the given time.Unforunately because the Geomagnetic and solar flux data has no predicted  component this density model is currently restricted to computing density in the past.density_nrlmsise00"
},

{
    "location": "modules/simulation/integrators/#",
    "page": "Integrators",
    "title": "Integrators",
    "category": "page",
    "text": ""
},

{
    "location": "modules/simulation/integrators/#SatelliteDynamics.Simulation.Integrators.RK4",
    "page": "Integrators",
    "title": "SatelliteDynamics.Simulation.Integrators.RK4",
    "category": "type",
    "text": "RK4 is a numerical integrator object which stores a function of signature  f(epc, x,...; kwargs...) along with its associated settings parameters.\n\nArguments:\n\nf::Function Function for integration. \nauxParams::Dict\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/integrators/#SatelliteDynamics.Simulation.Integrators.istep",
    "page": "Integrators",
    "title": "SatelliteDynamics.Simulation.Integrators.istep",
    "category": "function",
    "text": "Performs single integration step of numerical integrator.\n\nArguments:\n\nrk4::RK4 4-th order Runge-Kutta numerical integrator object\nepc::Union{Real, Epoch} Absolute time of start of integration step\ndt::Real Integration step size\nx::Array{<:Real, 1} State vector\nphi::Array{<:Real, 2} State transition matrix at start of integration step\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/integrators/#Integrators-1",
    "page": "Integrators",
    "title": "Integrators",
    "category": "section",
    "text": "The Integrators module is meant to provide built in numerical integration  capabilities for the module. While the dynamics functions provided as part of of the Simulation module are compatible with the more complete set of numerical  integrators provided in DifferentialEquations.jl, the integrators implemented here make other useful functionality such as integration of the Variational Equations, and incorporating impulsive maneuvers easier to implement.Currently only the RK4 integrator is supported.Normally it is easier to use the propagators defined in the Propagators module  for simulation, but the class and method provided here can be used for the  implementation of custom numerical propagators.RK4\nistep"
},

{
    "location": "modules/simulation/propagators/#",
    "page": "Propagators",
    "title": "Propagators",
    "category": "page",
    "text": ""
},

{
    "location": "modules/simulation/propagators/#SatelliteDynamics.Simulation.Propagators.fderiv_earth_orbit",
    "page": "Propagators",
    "title": "SatelliteDynamics.Simulation.Propagators.fderiv_earth_orbit",
    "category": "function",
    "text": "Compute the state derivative.\n\nArguments:\n\nepc::Epoch: Current epoch\nx::Array{<:Real, 1}: Satellite state vector\nmass::Real: Satellite mass [kg]\narea_drag: Velocity-facing area affected by drag. [m^2]\ncoef_drag: Coefficient of drag [dimensionless]\narea_srp: Velocity-facing area affected by drag. [m^2]\ncoef_srp: Coefficient of reflectivity [dimensionless]  \nn_grav::Integer: Gravity model degree (Default: 20)\nm_grav::Integer: Gravity model order (Default: 20)\ndrag::Bool: Include cannonball atomospheric drag in force model (Default: true)\nsrp::Bool: Include flat-plate solar radiation pressure in force model (Default: true)\nmoon::Bool: Include thridbody lunar gravity in force model (Default: true)\nsun::Bool: Include thirdbody solar in force model (Default: true)\nrelativity::Bool: Include relativistic effects in force model (Default: true)\n\nReturns:\n\ndx::Array{<:Float64, 1}: Satellite state derivative, velocity and accelerations [m; m/s]\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/propagators/#SatelliteDynamics.Simulation.Propagators.EarthInertialState",
    "page": "Propagators",
    "title": "SatelliteDynamics.Simulation.Propagators.EarthInertialState",
    "category": "type",
    "text": "Satellite orbit state vector using an Earth inertial state representation and dynamics model.\n\nIf an initial state transition matrix is provided it will be used for propagation if there is no state transition matrix then only the state will be propagated.\n\nAttributes: -rk4::RK4 Internal numerical integrator used for state propagation -dt::Real Default propagation time step. All steps will be this size unless  the state vector is requested to propagate to a time smaller than this step size, which it will do. -epc::Epoch Epoch of state -x::Array{Float64, 1} State vector. Earth-centered inertial Cartesian state. -phi::Union{Nothing, Array{Float64, 2}} State transition matrix, or the matrix of partial derivatives of the state at the current time with respect to the  start of propagation.\n\nThe following force model parametters can be set as keyword arguments\n\nParameters:\n\nmass::Real: Satellite mass [kg]\narea_drag: Velocity-facing area affected by drag. [m^2]\ncoef_drag: Coefficient of drag [dimensionless]\narea_srp: Velocity-facing area affected by drag. [m^2]\ncoef_srp: Coefficient of reflectivity [dimensionless]  \nn_grav::Integer: Gravity model degree (Default: 20)\nm_grav::Integer: Gravity model order (Default: 20)\ndrag::Bool: Include cannonball atomospheric drag in force model (Default: true)\nsrp::Bool: Include flat-plate solar radiation pressure in force model (Default: true)\nmoon::Bool: Include thridbody lunar gravity in force model (Default: true)\nsun::Bool: Include thirdbody solar in force model (Default: true)\nrelativity::Bool: Include relativistic effects in force model (Default: true)\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/propagators/#SatelliteDynamics.Simulation.Propagators.step!",
    "page": "Propagators",
    "title": "SatelliteDynamics.Simulation.Propagators.step!",
    "category": "function",
    "text": "Step dynamics state the specified time.\n\nArguments: -state::EarthInertialState State vector to propagate -dt::Real Step size. If no value is provided will use default state stepsize\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/propagators/#SatelliteDynamics.Simulation.Propagators.stepto!",
    "page": "Propagators",
    "title": "SatelliteDynamics.Simulation.Propagators.stepto!",
    "category": "function",
    "text": "Step dynamics state to the specified time. Will take as many internal steps as  required to advance the propagator to the correct time. No internal step will  exceed the size specified in the state propagator.\n\nArguments: -state::EarthInertialState State vector to propagate -time::Union{Real, Epoch} Time to propagate internal state too. Can be either a real number to advance the state by or the Epoch\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/propagators/#SatelliteDynamics.Simulation.Propagators.sim!",
    "page": "Propagators",
    "title": "SatelliteDynamics.Simulation.Propagators.sim!",
    "category": "function",
    "text": "Simulate the sttate dynamics to the specified time. Takes same inputs as stepto! but instead of just updating the state vector to the specified time, this  function also returns the timesteps, state values, and state transition matrices for each time step.\n\nArguments: -state::EarthInertialState State vector to propagate -time::Union{Real, Epoch} Time to propagate internal state too. Can be either a real number to advance the state by or the Epoch\n\nReturns: -t::Array{Float64, 1} Elapsed time as a scalar from the initial simulation epoch  -epc::Array{Epoch, 1} Epoch at each timestep  -x::Array{Float64, 2} State vectors at each time step. Time is along second axis -Phi::Array{Float64, 2} Stacked array of state transition matrices\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/propagators/#SatelliteDynamics.Simulation.Propagators.reinit!",
    "page": "Propagators",
    "title": "SatelliteDynamics.Simulation.Propagators.reinit!",
    "category": "function",
    "text": "Reinitialize State transition matrix to identity at the current time step.\n\nUsed to reinitialize the state transition matrix value to identity\n\n\n\n\n\n"
},

{
    "location": "modules/simulation/propagators/#Propagators-1",
    "page": "Propagators",
    "title": "Propagators",
    "category": "section",
    "text": "The Propagators module aims to provide straight forward, easy to use, interfaces for simulations of orbit and attitude dynamics. The module both defines the state  derivative dynamics functions as well as methods to propagate the state vector in time.It is important to note the default behavior and documentation for each function because functionality can change dramatically (simulation of state-only for full integration of the variational equations) depending on the inputs provided.fderiv_earth_orbit\nEarthInertialState\nstep!\nstepto!\nsim!\nreinit!"
},

{
    "location": "tutorials/orbit_propagation_example/#",
    "page": "Orbit Propagation",
    "title": "Orbit Propagation",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/orbit_propagation_example/#Orbit-Propagation-1",
    "page": "Orbit Propagation",
    "title": "Orbit Propagation",
    "category": "section",
    "text": "One of the primary features that SatelliteDynamics.jl aims to make easily accessible to users, is the ability to perform high-fidelity orbit propagation in an easy and customizable manner. In the example we will show how to simulate a satellite orbits using the tools provided in this module.To start out we will perform an orbit propagation using the most basic orbit  model possible: a point-mass approximation of Earth\'s gravity without any  other perturbation models added on. "
},

{
    "location": "tutorials/orbit_propagation_example/#Keplerian-Orbit-1",
    "page": "Orbit Propagation",
    "title": "Keplerian Orbit",
    "category": "section",
    "text": "First, we must declare the initial conditions for the simulation. This entails  declaring an initial Epoch as well as the inertial Cartesean state of the  statellite at that Epoch. # Declare simulation initial Epoch\nepc0 = Epoch(2019, 1, 1, 12, 0, 0, 0.0) \n\n# Declare initial state in terms of osculating orbital elements\noe0  = [R_EARTH + 500e3, 0.0, 90.0, 0, 0, 0]\n\n# Convert osculating elements to Cartesean state\neci0 = sOSCtoCART(oe0, use_degrees=true)Next, simulate the orbit:# Set the propagation end time to one orbit period after the start\nT    = orbit_period(oe0[1])\nepcf = epc0 + T\n\n# Propagate the orbit\nt, epc, eci = simulate(orb, epcf, timestep=1, dtmax=1)Putting it all together we have:# Declare simulation initial Epoch\nepc0 = Epoch(2019, 1, 1, 12, 0, 0, 0.0) \n\n# Declare initial state in terms of osculating orbital elements\noe0  = [R_EARTH + 500e3, 0.01, 75.0, 45.0, 30.0, 0.0]\n\n# Convert osculating elements to Cartesean state\neci0 = sOSCtoCART(oe0, use_degrees=true)\n\n# Set the propagation end time to one orbit period after the start\nT    = orbit_period(oe0[1])\nepcf = epc0 + T\n\n# Propagate the orbit\nt, epc, eci = simulate(epc0, eci0, epcf, timestep=1, dtmax=1)And that\'s it! All it took was 6 lines of code with the SatelliteDynamics  module to propagate an orbit. We can visualize the orbit in inertial space:(Image: )Or the evolution of the orbital elements:(Image: )"
},

{
    "location": "tutorials/orbit_propagation_example/#Full-Force-Model-1",
    "page": "Orbit Propagation",
    "title": "Full Force Model",
    "category": "section",
    "text": "We can also repeat the same propagation with a full force orbit model to see the effect of perturbations on the orbital elements:# Declare simulation initial Epoch\nepc0 = Epoch(2019, 1, 1, 12, 0, 0, 0.0) \n\n# Declare initial state in terms of osculating orbital elements\noe0  = [R_EARTH + 500e3, 0.01, 75.0, 45.0, 30.0, 0.0]\n\n# Convert osculating elements to Cartesean state\neci0 = sOSCtoCART(oe0, use_degrees=true)\n\n# Set the propagation end time to one orbit period after the start\nT    = orbit_period(oe0[1])\nepcf = epc0 + T\n\n# Propagate the orbit\nt, epc, eci = simulate(epc0, eci0, epcf, timestep=1, dtmax=1\n                        mass=100.0, \n                        area_drag=1.0, coef_drag=2.3, \n                        area_srp=1.0, coef_srp=1.8, \n                        n_grav=20, m_grav=20, \n                        drag=true, srp=true, \n                        moon=true, sun=true, \n                        relativity=true)We can visualize the orbit in inertial space:(Image: )Or the evolution of the orbital elements:(Image: )From these plots we can see the effect of the orbit perturbations on each of the orbital elements."
},

]}

using Documenter, SatelliteDynamics

include("src/makeplots.jl")

makedocs(
    modules   = [SatelliteDynamics],
    doctest   = false,
    clean     = true,
    linkcheck = true,
    format    = Documenter.HTML(),
    sitename  = "SatelliteDynamics.jl",
    authors   = "Duncan Eddy",
    pages     = Any[
        "Home" => "index.md",
        "Modules" => Any[
            "modules/constants.md",
            "modules/universe.md",
            "modules/time.md",
            "Reference Systems" => "modules/reference_systems.md",
            "modules/attitude.md",
            "modules/coordinates.md",
            "modules/astrodynamics.md",
            "Orbit Dynamics" => "modules/orbit_dynamics.md",
            "Function Index" => "modules/function_index.md",
        ],
        "Tutorials" => Any[
            "tutorials/orbit_propagation_example.md",
        ],
    ]
)

deploydocs(
    repo = "github.com/sisl/SatelliteDynamics.jl",
    devbranch = "master",
    devurl = "latest",
    deps = makeplots,
)
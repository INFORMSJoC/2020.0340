[![INFORMS Journal on Computing Logo](https://INFORMSJoC.github.io/logos/INFORMS_Journal_on_Computing_Header.jpg)](https://pubsonline.informs.org/journal/ijoc)

# VeRoViz: Vehicle Routing Visualization

This archive is distributed in association with the [INFORMS Journal on
Computing](https://pubsonline.informs.org/journal/ijoc) under the [MIT License](LICENSE.md).

The software and data in this repository are a snapshot of the software and data
that were used in the research reported on in the paper 
[VeRoViz: A Vehicle Routing Visualization Toolkit](https://doi.org/10.1287/ijoc.2022.1159) by L. Peng and C. Murray. 
The snapshot is based on 
[this SHA](https://github.com/optimatorlab/veroviz/commit/4b4b7da07abbc764169223cc4cac41e19ff7031d) 
in the development repository. 

**Important: This code is being developed on an on-going basis at 
https://github.com/optimatorlab/veroviz. Please go there if you would like to
get a more recent version or would like support.**

--- 


[![PyPI version](https://img.shields.io/pypi/v/veroviz.svg?style=flat)](https://pypi.org/project/veroviz/) [![License](https://img.shields.io/pypi/l/veroviz.svg?style=flat)](https://pypi.org/project/veroviz/)

VeRoViz is a suite of tools (primarily written in Python) to easily generate, test, and visualize vehicle routing problems.

Key features of the Python tools include:
- Generation of nodes on road networks;
- Calculation of travel time/distance matrices using external data providers;
- Creation of Leaflet maps to view nodes, routes, and basic geometric shapes; and
- Generation of dynamic CesiumJS content to view 4D "movies" of vehicle routing problems.


All Python source code is hosted in this repository.  Documentation, examples, contact information are available from the [VeRoViz project website](https://veroviz.org).

---

## About VeRoViz
VeRoViz is an open-source project from the Optimator Lab, in the University at Buffalo's Department of Industrial & Systems Engineering.

This project began in 2018 as a tool for our [research lab](https://optimatorlab.org). It is under ongoing development.

The prototypical VeRoViz user is someone who is developing models, algorithms, or heuristics for a vehicle routing problem (entities that move between locations). [Sketch](https://veroviz.org/sketch.html) can also be used as a teaching tool in the classroom to introduce vehicle routing concepts.

The aim of VeRoViz is to help such a user
- obtain road network data,
- sketch the locations of nodes (e.g., customers and depots),
- visualize arcs (connections) among these nodes,
- generate 3D movies showcasing solutions to vehicle routing problems,
- quickly generate test problems and distance (and/or time) matrices.

VeRoViz is not an optimization package. If you're interested in vehicle routing solvers, you might consider [GraphHopper](https://graphhopper.com/), [Vroom](https://vroom-project.org/), [OR-Tools](https://developers.google.com/optimization/routing/vrp), [VeRyPy](https://github.com/yorak/VeRyPy), or [VRPy](https://github.com/Kuifje02/vrpy).


---

## Cite

To cite this software, please cite the paper using its DOI (TBD) and the software itself using its DOI.

[![DOI](https://zenodo.org/badge/378475738.svg)](https://zenodo.org/badge/latestdoi/378475738)

Below is the BibTex for citing this version of the code.

```
@article{veroviz2021,
  author    = {Lan Peng and Chase Murray},
  title     = {{VeRoViz}: A Vehicle Routing Visualization Toolkit}, 
  publisher = {INFORMS Journal on Computing},
  year      = {2021},
  doi       = {10.5281/zenodo.5595093},
  url       = {https://github.com/INFORMSJoC/2020.0340},
}  
```

---

## Contact

- For general inquiries, send email to: info@veroviz.org.
- Follow VeRoViz on Twitter: [@veroviz_org](https://twitter.com/veroviz_org)
- We use a [GitHub issue tracker](https://github.com/optimatorlab/veroviz/issues) to monitor bugs and enhancement requests. Please report any issues you encounter or let us know of any new features you'd like us to incorporate in VeRoViz.


---

## About Us
- [Lan Peng](https://isaac0821.wordpress.com/introduction/) is the VeRoViz Lead Developer.  He is a Ph.D. Student in the Department of Industrial and Systems Engineering at the University at Buffalo.

- [Chase Murray](https://chasemurray.com/) is the VeRoViz Project Director.  He is an Assistant Professor in the Department of Industrial and Systems Engineering at the University at Buffalo.
 
We hope that VeRoViz adds value to your vehicle routing research. As always, we welcome your feedback (in the form of comments about how you're using the tool, issues you're experiencing, or ideas for new functionality).


--- 

## Contribute to VeRoViz

We welcome contributions from the vehicle routing community.  Please, help us make VeRoViz better!

Here's how you can help:
1.  [Report bugs/errors/oddities](https://github.com/optimatorlab/veroviz/issues/new/choose).  This helps us know if something's broken.
2.  [Suggest a new feature](https://github.com/optimatorlab/veroviz/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=).  We tried to think of all of the clever ways people might use VeRoViz, but we probably forgot something.  Let us know what you think would help make your life easier.
3. [Submit a pull request](https://github.com/optimatorlab/veroviz/pulls).  If you have some code that would fix an issue and/or improve VeRoViz, a pull request is the best way to incorporate that code into the package.  We haven't had any pull requests from outside collaborators, so we haven't yet worked out our preferred workflow.  So, if you're thinking of contributing code, please [send us an email](info@veroviz.org) first, so we can jointly decide the best way to collaborate.


---

## Links

- [Project Website](https://veroviz.org) - Includes installation instructions, documentation, and other relevant information.
- [PyPI Website](https://pypi.org/project/veroviz/) - VeRoViz may be installed via `pip`.
- [Change Log](CHANGELOG.md) - A summary of changes associated with each new release of VeRoViz.
- [FAQs](https://veroviz.org/about.html#faqs) - Frequently asked questions.
- [License](LICENSE.md) - VeRoViz is distributed under the MIT license.
- [Credits](CREDITS.md) - This project is made possible by numerous other software packages.

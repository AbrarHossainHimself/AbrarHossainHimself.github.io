---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: Hugo Academic Theme
      image:
        filename: header.png
      cta:
        label: '**Get Started**'
        url: https://hugoblox.com/templates/
      cta_alt:
        label: Ask a question
        url: https://discord.gg/z8wNYzb
      cta_note:
        label: >-
          <div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div>
      text: |-
        **Generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 500,000+ sites.**

        **Easily build anything with blocks - no-code required!**

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.

        <!--Custom spacing-->
        <div class="mb-3"></div>
        <!--GitHub Button JS-->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
    design: 
      css_class: "biography-custom-layout"
      # hide_interests: true

  # - block: markdown
  #   id: education
  #   content:
  #     title: Education
  #     text: |
  #       ### MSc in Computer Science, 2025 (Expected)
  #       **The University of Toledo**
        
  #       ### BSc in Electrical and Electronic Engineering, 2019
  #       **Chittagong University of Engineering & Technology**
  #   design:
  #     columns: '1'
  

  - block: markdown
    id: experience
    content:
      title: Experience
      text: |

        ### Intern
        **National Center for Supercomputing Applications**  
        June 2025 - August 2025 · Urbana, IL

        * Built parser for eBPF maps for 80+ VLANs and ports with configurable polling intervals via REST API
        * Integrated with InfluxDB v3 for efficient storage and Grafana for real-time visualization
        * Added configurable logging, reducing manual reconfiguration time by 40%

        ### Graduate Research Assistant
        **The University of Toledo**  
        August 2023 - Present · Toledo, OH

        * Developed TARDIS, a power-aware HPC scheduler using GNNs, cost reduction: 18% (temporal), 10-20% (spatial)
        * Developed LASP, a multi-armed bandit-based tuning strategy for HPC on edge devices, achieving 2.5% average performance gain over default settings.
        * Developed a SST-based scalable job scheduler, ensuring high accuracy in wait times, node usage, parallelization

        ### Visitor
        **NSF National Center for Atmospheric Research**  
        August 2024 - December 2024 · Remote

        * Set up CouchDB, Chords, and Streampipes on ACCESS Jetstreams for community weather data storage
        * Built data orchestrator for efficient data routing, achieving 30% transmission efficiency gain
        * Reduced deployment costs by 25% for communities implementing the project

        ### Intern
        **NSF National Center for Atmospheric Research**  
        May 2024 - August 2024 · Boulder, CO

        * Designed private LoRa network for 6+ data types with Raspberry Pi gateways and central server
        * Improved wind forecasting with edge-ML, achieving 20% accuracy gain on Raspberry Pi
        * Image analysis with TensorFlow, 25% accuracy gain, 3x faster training, and 95% precision on 10,000+ images
    design:
      columns: '1'
  
  - block: markdown
    id: publications
    content:
      title: Publications
      text: |

        ### 2025
        1. "**Power-Aware Scheduling for Multi-Center HPC Electricity Cost Optimization**"  
           Abrar Hossain, Abubeker Abdurahman, Mohammad Atiqul Islam, Kishwar Ahmed   
           *International Parallel and Distributed Processing Symposium (JSSPP  2025)*  

        2. "**Enhanced Intrusion Detection in IIoT Networks: A Lightweight Approach with Autoencoder-Based Feature Learning**"  
           Tasnimul Hasan, Abrar Hossain, Mufakir Qamar Ansari, Talha Hussain Syed   
           *International Conference on Internet of Things, Big Data and Security (IoTBDS 2025)*

        3. "**CROSS- HPC System Bayesian Optimization with Adaptive Transfer**"  
           Abrar Hossain, Kishwar Ahmed   
           *IEEE International Conference on Cluster Computing (CLUSTER 2025)*    
        
         

        ### 2024
        1. "**HPC Application Parameter Autotuning on Edge Devices: A Bandit Learning Approach**"  
           Abrar Hossain, Abdel-Hameed Badawy, Mohammad Atiqul Islam, Tapasya Patki, Kishwar Ahmed  
           *IEEE International Conference on High Performance Computing, Data, and Analytics (HiPC'24)*
        
        2. "**Scalable HPC Job Scheduling and Resource Management in SST**"  
           Abubeker Abdurahman, Abrar Hossain, Kevin A Brown, Kazutomo Yoshii, Kishwar Ahmed  
           *Winter Simulation Conference (WSC'24)*

        3. "**Environmental Data Sensing and Monitoring System Using Community-based Private LoRa Network**"  
            Abrar Hossain, Keith Maull, Agbeli Ameko
           *American Geophysical Union (AGU'24)*
        
        ### 2023
        3. "**Automating HPC Model Selection on Edge Devices**"  
           Abrar Hossain, Kishwar Ahmed  
           *International Conference for High Performance Computing, Networking, Storage and Analysis (SC'23)*
    design:
      columns: '1'

  - block: markdown
    id: review-volunteer
    content:
      title: Review and Volunteer Activity
      text:
       |
        ### Reviewer
        - **PEARC'25 Tutorials and Workshops**
        - **PEARC'25 Poster and Visualization**
        
        ### Student Volunteer
        - **PEARC'25**
        - **HiPC'24**
        - **AGU'24**
      design:
        columns: '1'

  - block: markdown
    id: news
    content:
      title: News
      text: |
        • **[August'25]** Attended 2025 CI4FAIR Workshop

        • **[July'25]** Served as Session chair for Systems and Software Systems Track Session at PEARC'25

        • **[July'25]** Served as Poster and Visualization Judge at PEARC'25

        • **[July'25]** Served as Student Volunteer at PEARC'25

        • **[June'25]** Started Internship at NCSA. Will be working with the NDTS team
        
        • **[May'25]** Received UToledo Graduate Research Assistant Recognition Award

        • **[April'25]** Attended Midwest RCD Workshop in Cleveland, OH

        • **[March'25]** Our paper got accepted to JSSPP'25

        • **[March'25]** Received 2025 Midwest Research Computing and Data Travel Grant

        • **[March'25]** Received 2024 Bangladesh Sweden Trust Fund Scholarship

        • **[February'25]** Served as Reviewer for PEARC'25

        • **[February'25]** Our paper got accepted to IoTBDS'24

        • **[December'24]** Presented my NSF NCAR openIoTwx project at AGU'25

        • **[December'24]** Received 2024 IEEE HiPC TCPP Travel Grant

        • **[November'24]** Received 2024 Friends Education Fund Travel Grant

        • **[November'24]** Received 2024 AGU Student Travel Grant

        • **[October'24]** Our paper got accepted to HiPC'24

        • **[October'24]** Received 2024 SIParCS Student Travel Grant

        • **[June'24]** Our paper got accepted to WSC'24

        • **[August'24]** Started Internship at NCSA. Will be working the NDTS team

        • **[May'24]** Extended my tenure at NSF NCAR as a visitior

        • **[March'24]** Started Internship at NSF NCAR. Will be working the openIoTwx team

        • **[September'23]** Our poster got accepted to SC'23
    design:
      columns: '1'

  - block: markdown
    id: talks
    content:
      title: Recorded Talks
      text: |
        ### Internship Presentations

        #### Environmental Data Sensing and Monitoring System Using Community-based Private LoRa Network
        <div class="talk-container" style="display: flex; gap: 20px; margin-bottom: 30px;">
          <div class="talk-details" style="flex: 2;">
            <p><strong>Venue: NCAR Mesa Lab, Boulder, CO </strong> </p>
            <p><strong>Date:</strong> August 2024</p>
            <p><strong>Abstract:</strong> Talk on my summer research with Dr Keith Maull and Agbeli Ameko </p>
            <p>
              <a href="https://www.youtube.com/watch?v=_os3F6x1sek" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; text-decoration: none; color: #2962ff;">
                <i class="fas fa-video"></i> Watch Presentation
              </a>
            </p>
          </div>
        </div>
    design:
      columns: '1'
      background:
        color: 'white'
      spacing:
        padding: ["20px", "0", "20px", "0"]
  
---

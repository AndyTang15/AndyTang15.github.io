const publications = [
    {
        image: "images/SAOC.jpg",
        title: "Semantic-Assisted Object Clustering for Multi-Modal Referring Video Segmentation",
        authors: "Yong Liu, Zhuoyan Luo, Yicheng Xiao, Yitong Wang, Shuyan Li, Xiu Li, Yujiu Yang, <strong>Yansong Tang#</strong>",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>)",
        year: 2025,
        links: [
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/11184493" },
            { label: "Code", url: "https://github.com/yongliu20/MRVS_SOC" },
        ],
        description: "This work proposes a video-centric language-guided segmentation pipeline that achieves efficient video multi-modal alignment in a progressive frame-to-video aggregation manner.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/FLAG3D.PNG",
        title: "FLAG3D++: A Benchmark for 3D Fitness Activity Comprehension With Language Instruction",
        authors: "<strong>Yansong Tang</strong>, Aoyang Liu, Jinpeng Liu, Shiyi Zhang, Wenxun Dai, Jie Zhou, Xiu Li, Jiwen Lu",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>)",
        year: 2025,
        links: [
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/11082527" },
            { label: "Code", url: "https://github.com/AndyTang15/FLAG3Dv2" },
            { label: "Conference Version", url: "https://openaccess.thecvf.com/content/CVPR2023/html/Tang_FLAG3D_A_3D_Fitness_Activity_Dataset_With_Language_Instruction_CVPR_2023_paper.html" }
        ],
        description: "We present FLAG3D++, a large-scale benchmark with 3D fitness activities and language instructions, along with a hierarchical model (HL-GCN) that effectively fuses language and pose data for counting and assessing actions, advancing research in human activity understanding.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/yong-PAMI.png",
        title: "Learning High-Quality Dynamic Memory for Video Object Segmentation",
        authors: "Yong Liu, Ran Yu, Fei Yin, Xinyuan Zhao, Wei Zhao, Weihao Xia, Jiahao Wang, Yitong Wang, <strong>Yansong Tang#</strong>, and Yujiu Yang#",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>)",
        year: 2025,
        links: [
            { label: "Paper", url: "https://doi.org/10.1109/TPAMI.2025.3532306" },
            { label: "Code", url: "https://github.com/yongliu20/QDMN?tab=readme-ov-file" }
        ],
        description: "We propose QDMN, a memory-based dynamic framework for semi-supervised video object segmentation that performs adaptive quality awareness and dynamic update of reference information.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/lavt-pami.png",
        title: "Language-Aware Vision Transformer for Referring Segmentation",
        authors: "Zhao Yang*, Jiaqi Wang*, Xubing Ye*, <strong>Yansong Tang#</strong>, Kai Chen, Hengshuang Zhao, Philip H.S. Torr",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>)",
        year: 2024,
        links: [
            { label: "Paper", url: "https://doi.org/10.1109/TPAMI.2024.3468640" },
            { label: "Code", url: "https://github.com/Yxxxb/LAVT-RS" },
            { label: "Conference Version", url: "https://openaccess.thecvf.com/content/CVPR2022/papers/Yang_LAVT_Language-Aware_Vision_Transformer_for_Referring_Image_Segmentation_CVPR_2022_paper.pdf" }
        ],
        description: "We propose LAVT, a Transformer-based universal referring image and video segmentation (RIS and RVOS) framework that performs language-aware visual encoding in place of cross-modal fusion post feature extraction.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/tpami.png",
        title: "Comprehensive Instructional Video Analysis: The COIN Dataset and Performance Evaluation",
        authors: "<strong>Yansong Tang</strong>, Jiwen Lu, and Jie Zhou",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>)",
        year: 2021,
        links: [
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/9037088" },
            { label: "Project Page", url: "https://coin-dataset.github.io/" },
            { label: "中文解读", url: "https://mp.weixin.qq.com/s/bYaAYkTj_0OxpDcWsToBWw" },
            { label: "Conference Version", url: "https://openaccess.thecvf.com/content_CVPR_2019/html/Tang_COIN_A_Large-Scale_Dataset_for_Comprehensive_Instructional_Video_Analysis_CVPR_2019_paper.html" }
        ],
        description: "COIN is currently the largest and most comprehensive instructional video analysis datasets with rich annotations.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/occnerf.jpg",
        title: "OccNeRF: Advancing 3D Occupancy Prediction in LiDAR-Free Environments",
        authors: "Chubin Zhang*, Juncheng Yan*, Yi Wei*, Jiaxin Li, Li Liu, <strong>Yansong Tang#</strong>, Yueqi Duan, Jiwen Lu",
        venue: "IEEE Transactions on Image Processing (<strong>TIP</strong>)",
        year: 2025,
        links: [
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/11003427" },
            { label: "Project Page", url: "https://lin-shan.com/OccNeRF" },
            { label: "Code", url: "https://github.com/LinShan-Bin/OccNeRF" },
            { label: "中文解读", url: "https://zhuanlan.zhihu.com/p/675196840?share_code=eax9MAU2N508&utm_psn=1910451444068388928" }
        ],
        description: "OccNeRF is a LiDAR-free method for 3D occupancy prediction that leverages multi-camera images, temporal photometric consistency, and open-vocabulary segmentation for supervision.",
        selected: true,
        topics: ["Embodied agent"],
    },
    {
        image: "images/tcsvt.png",
        title: "Efficient Text-Guided 3D-Aware Generation with Score Distillation on 3D Distribution",
        authors: "Yiji Cheng*, Fei Yin*, Xiaoke Huang, Xintong Yu, Jiaxiang Liu, Shikun Feng, Yujiu Yang#, <strong>Yansong Tang#</strong>",
        venue: "IEEE Transactions on Circuits and Systems for Video Technology (<strong>TCSVT</strong>)",
        year: 2025,
        links: [
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/10963753" },
        ],
        description: "We propose InstantDreamer, a text-guided 3D generator that efficiently creates multi-view consistent 3D assets in one step without paired data, outperforming previous methods in speed and quality.",
        selected: false,
        topics: ["Visual generation"],
    },
    {
        image: "images/stableswap.png",
        title: "Stableswap: Stable face swapping in a shared and controllable latent space",
        authors: "Yixuan Zhu, Wenliang Zhao, <strong>Yansong Tang#</strong>, Yongming Rao, Jie Zhou, Jiwen Lu",
        venue: "IEEE Transactions on Multimedia (<strong>TMM</strong>)",
        year: 2024,
        links: [
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/10444967" },
        ],
        description: "We introduce StableSwap, a reversible autoencoder-based framework for stable and identity-consistent face swapping in a shared latent space, achieving superior performance and region-controllable editing compared to previous methods.",
        selected: false,
        topics: ["Visual generation"],
    },
    {
        image: "images/dreamlight.png",
        title: "DreamLight: Towards Harmonious and Consistent Image Relighting",
        authors: "Yong Liu*, Wenpeng Xiao*, Qianqian Wang, Junlin Chen, Yitong Wang, Shiyin Wang, Xinglong Wu, <strong>Yansong Tang#</strong>",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.14549" },
            { label: "Code", url: "https://github.com/yongliu20/DreamLight" }
        ],
        description: "We introduce DreamLight, a universal image relighting model that seamlessly blends subjects into new backgrounds with natural lighting consistency using both image and text prompts.",
        selected: true,
        topics: ["Visual Generation"],
    },
    {
        image: "images/gwm.png",
        title: "GWM: Towards Scalable Gaussian World Models for Robotic Manipulation",
        authors: "Guanxing Lu*, Baoxiong Jia*, Puhao Li*, Yixin Chen, Ziwei Wang, <strong>Yansong Tang#</strong>, Siyuan Huang#",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "Paper", url: "https://ziweiwangthu.github.io/data/GWM.pdf" },
            { label: "Project Page", url: "https://gaussian-world-model.github.io/" },
        ],
        description: "We introduce Gaussian World Model (GWM), a novel 3D world model that predicts future robot scenes using Gaussian Splatting, enabling more accurate policy training and outperforming previous state-of-the-art methods.",
        selected: true,
        topics: ["Embodied agent"],
    },
    {
        image: "images/momentum_gs.jpg",
        title: "Momentum-GS: Momentum Gaussian Self-Distillation for High-Quality Large Scene Reconstruction",
        authors: "Jixuan Fan*, Wanhua Li*, Yifei Han, Tianru Dai, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.04887" },
            { label: "Project Page", url: "https://jixuan-fan.github.io/Momentum-GS_Page/" },
            { label: "Code", url: "https://github.com/Jixuan-Fan/Momentum-GS" }
        ],
        description: "We propose Momentum-GS, a self-distillation approach for more accurate and efficient 3D Gaussian Splatting.",
        selected: true,
        topics: ["Embodied agent"],
    },
    {
        image: "images/scorehoi.png",
        title: "ScoreHOI: Physically Plausible Reconstruction of Human-Object Interaction via Score-Guided Diffusion",
        authors: "Ao Li, Jinpeng Liu, Yixuan Zhu, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2509.07920" },
            { label: "Code", url: "https://github.com/RammusLeo/ScoreHOI" }
        ],
        description: "We propose ScoreHOI, a framework for human-object interaction reconstruction via score-guided diffusion to enhance the physical plausibility.",
        selected: true,
        topics: ["Embodied agent"],
    },
    {
        image: "images/anybimanual.png",
        title: "AnyBimanual: Transferring Unimanual Policy for General Bimanual Manipulation",
        authors: "Guanxing Lu*, Tengbo Yu*, Haoyuan Deng, Season Si Chen, <strong>Yansong Tang#</strong>, Ziwei Wang",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.06779" },
            { label: "Project Page", url: "https://anybimanual.github.io/" },
            { label: "Code", url: "https://github.com/Tengbo-Yu/AnyBimanual" }
        ],
        description: "We propose AnyBimanual, a plug-and-play method that transfers pretrained unimanual policy to general bimanual manipulation tasks with few demonstrations.",
        selected: true,
        topics: ["Embodied agent"],
    },
    {
        image: "images/flashvstream.jpg",
        title: "Flash-VStream: Efficient Real-Time Understanding for Long Video Streams",
        authors: "Haoji Zhang*, Yiqin Wang*, <strong>Yansong Tang#</strong>, Yong Liu, Jiashi Feng, Xiaojie Jin#",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.23825" },
            { label: "Project Page", url: "https://zhang9302002.github.io/vstream-iccv-page/" },
            { label: "Code", url: "https://github.com/IVGSZ/Flash-VStream/" }
        ],
        description: "We propose Flash-VStream, an efficient VLM with a novel memory mechanism that enables real-time understanding and querying of extremely long video streams.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/openbench.jpg",
        title: "Stepping Out of Similar Semantic Space for Open-Vocabulary Segmentation",
        authors: "Yong Liu*, Songli Wu*, Sule Bai*, Jiahao Wang, Yitong Wang, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.16058" }
        ],
        description: "We introduce OpenBench, a new benchmark designed to more rigorously evaluate open-vocabulary segmentation models on diverse real-world concepts, and propose OVSNet for segmentation in diverse and open scenarios.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/kvedit.jpg",
        title: "KV-Edit: Training-Free Image Editing for Precise Background Preservation",
        authors: "Tianrui Zhu*, Shiyi Zhang*, Jiawei Shao, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2502.17363" },
            { label: "Project Page", url: "https://xilluill.github.io/projectpages/KV-Edit/" },
            { label: "Code", url: "https://github.com/Xilluill/KV-Edit" }
        ],
        description: "We propose KV-Edit to address the challenge of background preservation in image editing, thereby enhancing the practicality of AI editing.",
        topics: ["Visual generation"],
    },
    {
        image: "images/manigaussianpp.jpg",
        title: "ManiGaussian++: Dynamic Gaussian Splatting for Multi-task Bimanual Manipulation",
        authors: "Tengbo Yu*, Guanxing Lu*, Zaijia Yang*, Haoyuan Deng, Season Si Chen, Jiwen Lu, Wenbo Ding, Guoqiang Hu, <strong>Yansong Tang#</strong>, Ziwei Wang",
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (<strong>IROS</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.19842" },
            { label: "Code", url: "https://github.com/April-Yz/ManiGaussian_Bimanual" }
        ],
        description: "We propose ManiGaussian++, a hierarchical Gaussian world model that captures multi-body dynamics for improved multi-task bimanual manipulation.",
        topics: ["Embodied agent"],
    },
    {
        image: "images/flexiact.jpg",
        title: "FlexiAct: Towards Flexible Action Control in Heterogeneous Scenarios",
        authors: "Shiyi Zhang*, Junhao Zhuang*, Zhaoyang Zhang, <strong>Yansong Tang#</strong>",
        venue: "ACM SIGGRAPH 2025 Conference Papers (<strong>SIGGRAPH</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2505.03730" },
            { label: "Code", url: "https://github.com/shiyi-zh0408/FlexiAct" }
        ],
        description: "We achieve action transfer in heterogeneous scenarios with varying spatial structures or cross-domain subjects.",
        selected: true,
        topics: ["Visual generation"],
    },
    {
        image: "images/voco.png",
        title: "VoCo-LLaMA: Towards Vision Compression with Large Language Models",
        authors: "Xubing Ye, Yukang Gan, Xiaoke Huang, Yixiao Ge, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2406.12275" },
            { label: "Project Page", url: "https://yxxxb.github.io/VoCo-LLaMA-page/" },
            { label: "Code", url: "https://github.com/Yxxxb/VoCo-LLaMA" }
        ],
        description: "We propose VoCo-LLaMA, the first approach to compress vision information utilizing the LLMs' understanding paradigm, which can compress hundreds of vision tokens into a single VoCo token with minimal visual information loss.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/atp.png",
        title: "ATP-LLaVA: Adaptive Token Pruning for Large Vision Language Models",
        authors: "Xubing Ye, Yukang Gan, Yixiao Ge, Xiao-ping Zhang, <strong>Yansong Tang</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.00447" },
            { label: "Project Page", url: "https://yxxxb.github.io/ATP-LLaVA-page/" }
        ],
        description: "We propose ATP-LLaVA, a framework that adaptively determines pruning ratios instance-wise and LLM layer-wise for effective vision token pruning on large vision language models.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/sem2-love.png",
        title: "SAM2-LOVE: Segment Anything Model 2 in Language-aided Audio-Visual Scenes",
        authors: "Yuji Wang*, Haoran Xu*, Yong Liu, Jiaze Li, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.01558" },
            { label: "Code", url: "https://github.com/VoyageWang/SAM2LOVE" }
        ],
        description: "We propose a novel framework called SAM2-LOVE to effectively segment the video objects referred by the audio and text and achieve significant improvement in Ref-AVS tasks.",
        selected: true,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/fade.png",
        title: "FADE: Frequency-Aware Diffusion Model Factorization for Video Editing",
        authors: "Yixuan Zhu, Haolin Wang, Shilin Ma, Wenliang Zhao, <strong>Yansong Tang</strong>, Lei Chen, Jie Zhou",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.05934" },
            { label: "Code", url: "https://github.com/EternalEvan/FADE" }
        ],
        description: "We introduce FADE—a training-free yet highly effective video editing approach that fully leverages the inherent priors from pre-trained video diffusion models via frequency-aware factorization.",
        topics: ["Visual generation"],
    },
    {
        image: "images/wizardmath.png",
        title: "WizardMath: Empowering Mathematical Reasoning for Large Language Models via Reinforced Evol-Instruct",
        authors: "Haipeng Luo*, Qingfeng Sun*, Can Xu#, Pu Zhao, Jianguang Lou, Chongyang Tao, Xiubo Geng, Qingwei Lin, Shifeng Chen#, <strong>Yansong Tang#</strong>, Dongmei Zhang",
        venue: "The Thirteenth International Conference on Learning Representations (<strong>ICLR</strong>)",
        year: 2025,
        badge: "<span style='color:red;font-weight:bold;'>Oral Presentation</span>",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2308.09583" },
            { label: "Code", url: "https://github.com/nlpxucan/WizardLM" }
        ],
        description: "We propose a new fully AI-powered automatic reinforcement learning method, Reinforcement Learning from Evol-Instruct Feedback (RLEIF), alongside Math Evol-Instruct and Process Supervision, for improving reasoning performance.",
        selected: false,
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/thinkbot.png",
        title: "ThinkBot: Embodied Instruction Following with Thought Chain Reasoning",
        authors: "Guanxing Lu, Ziwei Wang, Changliu Liu, Jiwen Lu and <strong>Yansong Tang#</strong>",
        venue: "The Thirteenth International Conference on Learning Representations (<strong>ICLR</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2312.07062" },
            { label: "Project Page", url: "https://guanxinglu.github.io/thinkbot/" }
        ],
        description: "We have presented a ThinkBot agent that reasons the thought chain for missing instruction recovery in embodied instruction following (EIF) tasks.",
        selected: true,
        topics: ["Embodied agent"],
    },
    {
        image: "images/instarevive.png",
        title: "InstaRevive: One-Step Image Enhancement via Dynamic Score Matching",
        authors: "Yixuan Zhu, Haolin Wang, Ao Li, Wenliang Zhao, <strong>Yansong Tang</strong>, Jingxuan Niu, Lei Chen, Jie Zhou, Jiwen Lu",
        venue: "The Thirteenth International Conference on Learning Representations (<strong>ICLR</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2504.15513" },
            { label: "Code", url: "https://github.com/EternalEvan/InstaRevive" }
        ],
        description: "We propose InstaRevive, a straightforward yet powerful image enhancement framework that employs score-based diffusion distillation to harness potent generative capability and minimize the sampling steps.",
        topics: ["Visual generation"],
    },
    {
        image: "images/geolrm.png",
        title: "GeoLRM: Geometry-Aware Large Reconstruction Model for High-Quality 3D Gaussian Generation",
        authors: "Chubin Zhang, Hongliang Song, Yi Wei, Chen Yu, Jiwen Lu, <strong>Yansong Tang#</strong>",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2406.15333" },
            { label: "Project Page", url: "https://alibaba-yuanjing-aigclab.github.io/GeoLRM/" },
            { label: "Code", url: "https://github.com/alibaba-yuanjing-aigclab/GeoLRM" }
        ],
        description: "This paper proposes a geometry-aware large reconstruction model for sparse-view reconstruction and 3D generation.",
        topics: ["Visual generation"],
    },
    {
        image: "images/q-vlm.png",
        title: "Q-VLM: Post-training Quantization for Large Vision-Language Models",
        authors: "Changyuan Wang, Ziwei Wang, Xiuwei Xu, <strong>Yansong Tang#</strong>, Jie Zhou, Jiwen Lu",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2410.08119" },
            { label: "Code", url: "https://github.com/changyuanwang17/qvlm" }
        ],
        description: "This paper aims to achieve efficient inference and memory saving for large vision-language models.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/manigaussian.jpg",
        title: "ManiGaussian: Dynamic Gaussian Splatting for Multi-task Robotic Manipulation",
        authors: "Guanxing Lu, Shiyi Zhang, Ziwei Wang, Changliu Liu, Jiwen Lu and <strong>Yansong Tang</strong>",
        venue: "The European Conference on Computer Vision (<strong>ECCV</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2403.08321" },
            { label: "Project Page", url: "https://guanxinglu.github.io/ManiGaussian" },
            { label: "Code", url: "https://github.com/GuanxingLu/ManiGaussian" }
        ],
        description: "We propose a dynamic Gaussian Splatting method named ManiGaussian for multi-task robotic manipulation, which mines scene dynamics via future scene reconstruction.",
        topics: ["Embodied agent"],
    },
    {
        image: "images/motionlcm.png",
        title: "MotionLCM: Real-time Controllable Motion Generation via Latent Consistency Model",
        authors: "Wenxun Dai, Linghao Chen, Jingbo Wang, Jinpeng Liu, Bo Dai, <strong>Yansong Tang</strong>",
        venue: "The European Conference on Computer Vision (<strong>ECCV</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2404.19759" },
            { label: "Project Page", url: "https://dai-wenxun.github.io/MotionLCM-page/" },
            { label: "Code", url: "https://github.com/Dai-Wenxun/MotionLCM" }
        ],
        description: "We introduces MotionLCM, extending controllable motion generation to a real-time level.",
        topics: ["Visual generation"],
    },
    {
        image: "images/pro-motion.png",
        title: "Plan, Posture and Go: Towards Open-Vocabulary Text-to-Motion Generation",
        authors: "Jinpeng Liu*, Wenxun Dai*, Chunyu Wang*, Yiji Cheng, <strong>Yansong Tang#</strong>, Xin Tong",
        venue: "The European Conference on Computer Vision (<strong>ECCV</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2312.14828" },
            { label: "Project Page", url: "https://moonsliu.github.io/Pro-Motion/" }
        ],
        description: "We present a divide-and-conquer framework named PRO-Motion, which consists of three modules as motion planner, posture-diffuser and go-diffuser.",
        topics: ["Visual generation"],
    },
    {
        image: "images/segcap.png",
        title: "Segment and Caption Anything",
        authors: "Xiaoke Huang, Jianfeng Wang, <strong>Yansong Tang#</strong>, Zheng Zhang, Han Hu, Jiwen Lu, Lijuan Wang, Zicheng Liu",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2312.00869" },
            { label: "Project Page", url: "https://xk-huang.github.io/segment-caption-anything/" },
            { label: "Code", url: "https://github.com/xk-huang/segment-caption-anything" },
            { label: "Tsinghua Twitter", url: "https://twitter.com/Tsinghua_Uni/status/1743950648092102855" }
        ],
        description: "We propose a method to efficiently equip the Segment Anything Model (SAM) with the ability to generate regional captions by introducing a lightweight query-based feature mixer.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/UniSeg.png",
        title: "Universal Segmentation at Arbitrary Granularity with Language Instruction",
        authors: "Yong Liu, Cairong Zhang, Yitong Wang, Jiahao Wang, Yujiu Yang, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2312.01623.pdf" },
            { label: "Code", url: "https://github.com/workforai/UniLSeg" }
        ],
        description: "We propose a unified framework to achieve universal segmentation at a wide spectrum of granularities and levels.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/openseg.png",
        title: "Open-Vocabulary Segmentation with Semantic-Assisted Calibration",
        authors: "Yong Liu*, Sule Bai*, Guanbin Li, Yitong Wang, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2312.04089.pdf" },
            { label: "Code", url: "https://github.com/workforai/SCAN" }
        ],
        description: "We propose an open-vocabulary segmentation (OVS) method by calibrating in-vocabulary and domain-biased embedding space with generalized contextual prior of CLIP.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/datafreequan.png",
        title: "Towards Accurate Data-free Quantization for Diffusion Models",
        authors: "Changyuan Wang, Ziwei Wang, Xiuwei Xu, <strong>Yansong Tang#</strong>, Jie Zhou, Jiwen Lu",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        badge: "<span style='color:red;font-weight:bold;'>Highlight</span>",
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2305.18723.pdf" },
            { label: "Code", url: "https://github.com/ChangyuanWang17/APQ-DM" }
        ],
        description: "We propose an accurate data-free post-training quantization framework of diffusion models (ADP-DM) for efficient image generation.",
        selected: true,
        topics: ["Visual generation"],
    },
    {
        image: "images/aqa-mi.jpg",
        title: "Narrative Action Evaluation with Prompt-Guided Multimodal Interaction",
        authors: "Shiyi Zhang*, Sule Bai*, Guangyi Chen, Lei Chen, Jiwen Lu, Junle Wang, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2404.14471" },
            { label: "Code", url: "https://github.com/shiyi-zh0408/NAE_CVPR2024" }
        ],
        description: "We investigate a new problem called narrative action evaluation (NAE) and propose a prompt-guided multimodal interaction framework.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/dpmesh.png",
        title: "DPMesh: Exploiting Diffusion Prior for Occluded Human Mesh Recovery",
        authors: "Yixuan Zhu*, Ao Li*, <strong>Yansong Tang#</strong>, Wenliang Zhao, Jie Zhou, Jiwen Lu",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2404.01424.pdf" },
            { label: "Project Page", url: "https://rammusleo.github.io/dpmesh-proj/" },
            { label: "Code", url: "https://github.com/RammusLeo/DPMesh" }
        ],
        description: "We propose a new method to exploit diffusion priors for human mesh recovery (HMR) in occlusion and crowded scenarios.",
        topics: ["Visual generation"],
    },
    {
        image: "images/flowie.png",
        title: "FlowIE: Efficient Image Enhancement via Rectified Flow",
        authors: "Yixuan Zhu, Wenliang Zhao, Ao Li, <strong>Yansong Tang</strong>, Jie Zhou, Jiwen Lu",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2024,
        badge: "<span style='color:red;font-weight:bold;'>Oral Presentation</span>",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2406.00508" },
            { label: "Code", url: "https://github.com/EternalEvan/FlowIE" }
        ],
        description: "We proposed a unified framework for various efficient image enhancement tasks with generative diffusion priors.",
        selected: false,
        topics: ["Visual generation"],
    },
    {
        image: "images/MCUFormer.PNG",
        title: "MCUFormer: Deploying Vision Transformers on Microcontrollers with Limited Memory",
        authors: "Yinan Liang, Ziwei Wang, Xiuwei Xu, <strong>Yansong Tang#</strong>, Jie Zhou, Jiwen Lu",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>)",
        year: 2023,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2310.16898" },
            { label: "Code", url: "https://github.com/liangyn22/MCUFormer" },
            { label: "中文解读", url: "https://mp.weixin.qq.com/s/j4-C2eDSpJPCAPp1XYwEZA" }
        ],
        description: "We propose a hardware-algorithm co-optimizations method called MCUFormer to deploy vision transformers on microcontrollers with extremely limited memory, where we jointly design transformer architecture and construct the inference operator library to fit the memory resource constraint.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/Tem-adapter.PNG",
        title: "Tem-adapter: Adapting Image-Text Pretraining for Video Question Answer",
        authors: "Guangyi Chen*, Xiao Liu*, Guangrun Wang, Kun Zhang, Philip H.S. Torr, Xiao-Ping Zhang, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2023,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2308.08414.pdf" },
            { label: "Project Page", url: "https://github.com/XLiu443/Tem-adapter" }
        ],
        description: "We present Tem-Adapter, a method that improves VQA by leveraging image-based knowledge and introducing temporal and semantic aligners.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/skip-plan.PNG",
        title: "Skip-Plan: Procedure Planning in Instructional Videos via Condensed Action Space Learning",
        authors: "Zhiheng Li, Wenjia Geng, Muheng Li, Lei Chen, <strong>Yansong Tang#</strong>, Jiwen Lu, Jie Zhou",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong>ICCV</strong>)",
        year: 2023,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2310.00608v1.pdf" },
            { label: "Code", url: "https://gitee.com/niujx66/skip_-plan-mindspore" }
        ],
        description: "We propose Skip-Plan, a condensed action space learning method for procedure planning in instructional videos.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/FLAG3D.PNG",
        title: "FLAG3D: A 3D Fitness Activity Dataset with Language Instruction",
        authors: "<strong>Yansong Tang*</strong>, Jinpeng Liu*, Aoyang Liu*, Bin Yang, Wenxun Dai, Yongming Rao, Jiwen Lu, Jie Zhou, Xiu Li",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2023,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2212.04638.pdf" },
            { label: "Project Page", url: "https://andytang15.github.io/FLAG3D/" }
        ],
        description: "We present FLAG3D, a large-scale 3D fitness activity dataset with language instruction.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/LOGO.PNG",
        title: "LOGO: A Long-Form Video Dataset for Group Action Quality Assessment",
        authors: "Shiyi Zhang, Wenxun Dai, Sujia Wang, Xiangwei Shen, Jiwen Lu, Jie Zhou, <strong>Yansong Tang#</strong>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2023,
        links: [
            { label: "PDF", url: "https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_LOGO_A_Long-Form_Video_Dataset_for_Group_Action_Quality_Assessment_CVPR_2023_paper.pdf" },
            { label: "Project Page", url: "https://github.com/shiyi-zh0408/LOGO" }
        ],
        description: "LOGO is a new multi-person long-form video dataset for action quality assessment.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/hornet.jpg",
        title: "HorNet: Efficient High-Order Spatial Interactions with Recursive Gated Convolutions",
        authors: "Yongming Rao*, Wenliang Zhao*, <strong>Yansong Tang</strong>, Jie Zhou, Ser-Nam Lim, Jiwen Lu",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>)",
        year: 2022,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2207.14284" },
            { label: "Project Page", url: "https://hornet.ivg-research.xyz/" },
            { label: "Code", url: "https://github.com/raoyongming/HorNet" },
            { label: "中文解读", url: "https://mp.weixin.qq.com/s/MyMIPv-bn9wVMLABurjOUA" }
        ],
        description: "HorNet is a family of generic vision backbones that perform explicit high-order spatial interactions based on Recursive Gated Convolution.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/OrdinalCLIP.png",
        title: "OrdinalCLIP: Learning Rank Prompts for Language-Guided Ordinal Regression",
        authors: "Wanhua Li*, Xiaoke Huang*, Zheng Zhu, <strong>Yansong Tang</strong>, Xiu Li, Jiwen Lu, Jie Zhou",
        venue: "Conference on Neural Information Processing Systems (<strong>NeurIPS</strong>)",
        year: 2022,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2206.02338" },
            { label: "Project Page", url: "https://xk-huang.github.io/OrdinalCLIP" },
            { label: "Code", url: "https://github.com/xk-huang/OrdinalCLIP" },
            { label: "中文解读", url: "https://zhuanlan.zhihu.com/p/565034693" }
        ],
        description: "We present a language-powered paradigm for ordinal regression.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/lavt.png",
        title: "LAVT: Language-Aware Vision Transformer for Referring Image Segmentation",
        authors: "Zhao Yang*, Jiaqi Wang*, <strong>Yansong Tang#</strong>, Kai Chen, Hengshuang Zhao, Philip H.S. Torr",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2022,
        links: [
            { label: "arXiv", url: "https://arxiv.org/pdf/2112.02244v2.pdf" },
            { label: "Code", url: "https://github.com/yz93/LAVT-RIS" },
            { label: "中文解读", url: "https://mp.weixin.qq.com/s/k8IgExjxybRSscoRy-jHSg" }
        ],
        description: "We present an end-to-end hierarchical Transformer-based network for referring segmentation.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/BNV-Fusion.png",
        title: "BNV-Fusion: Dense 3D Reconstruction using Bi-level Neural Volume Fusion",
        authors: "Kejie Li, <strong>Yansong Tang</strong>, Victor Adrian Prisacariu, Philip H.S. Torr",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2022,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2204.01139" },
            { label: "Code", url: "https://github.com/likojack/bnv_fusion" },
            { label: "中文解读", url: "https://mp.weixin.qq.com/s/h-8O1kFxX_IVzFB6bCNrvg" }
        ],
        description: "We present Bi-level Neural Volume Fusion, which leverages recent advances in neural implicit representations and neural rendering for dense 3D reconstruction. In order to incrementally integrate new depth maps into a global neural implicit representation, we propose a novel bi-level fusion strategy that considers both efficiency and reconstruction quality by design.",
        topics: ["Embodied agent"],
    },
    {
        image: "images/denseclip.png",
        title: "DenseCLIP: Language-Guided Dense Prediction with Context-Aware Prompting",
        authors: "Yongming Rao*, Wenliang Zhao*, Guangyi Chen, <strong>Yansong Tang</strong>, Zheng Zhu, Guan Huang, Jie Zhou, Jiwen Lu",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2022,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2112.01518" },
            { label: "Project Page", url: "https://denseclip.ivg-research.xyz" },
            { label: "Code", url: "https://github.com/raoyongming/DenseCLIP" },
            { label: "中文解读", url: "https://mp.weixin.qq.com/s/fERXjGBVXzo6TaYiV2Z9ZQ" }
        ],
        description: "DenseCLIP is a new framework for dense prediction by implicitly and explicitly leveraging the pre-trained knowledge from CLIP.",
        topics: ["Multimodal understanding"],
    },
    {
        image: "images/musdl.jpg",
        title: "Uncertainty-aware Score Distribution Learning for Action Quality Assessment",
        authors: "<strong>Yansong Tang*</strong>, Zanlin Ni*, Jiahuan Zhou, Danyang Zhang, Jiwen Lu, Ying Wu, and Jie Zhou",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
        year: 2020,
        badge: "<span style='color:red;font-weight:bold;'>Oral Presentation</span>",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2006.07665" },
            { label: "Code", url: "https://github.com/nzl-thu/MUSDL" }
        ],
        description: "We propose an uncertainty-aware score distribution learning method and extend it to a multi-path model for action quality assessment.",
        selected: true,
        topics: ["Multimodal understanding"],
    }
];
module.exports = publications;
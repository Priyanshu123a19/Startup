import premiereIcon from "@/assets/images/Adobe_Premiere_Pro_CC_icon.svg";
import afterEffectsIcon from "@/assets/images/Adobe_After_Effects_CC_icon.svg";
import capcutIcon from "@/assets/images/Capcut-icon.svg";
import davinciIcon from "@/assets/images/DaVinci_Resolve_Studio.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import IntegrationsColumn from "@/components/integrations-column";
import Tag from "@/components/Tag";
const integrations = [
    { name: "Adobe Premiere Pro", icon: premiereIcon, description: "Professional video editing software for cinematic productions." },
    { name: "CapCut", icon: capcutIcon, description: "Intuitive video editing app for social media content creators." },
    { name: "DaVinci Resolve", icon: davinciIcon, description: "Professional color grading and editing suite." },
    { name: "After Effects", icon: afterEffectsIcon, description: "Motion graphics and visual effects powerhouse." },
    { name: "Slack", icon: slackIcon, description: "Team collaboration platform for seamless project communication." },
    { name: "Notion", icon: notionIcon, description: "All-in-one workspace for project management and documentation." },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return <section className="py-24 overflow-hidden">
        <div className="container">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                <div>
            <Tag>
                Professional Tools
            </Tag>
            <h2 className="text-6xl font-medium mt-6 ">
                Works With <span className="text-lime-400">Industry Standards</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
                Our team uses the same professional tools that power Hollywood productions, ensuring your videos meet the highest industry standards.
            </p>
                </div>
                <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
                <IntegrationsColumn integrations={integrations} />
                <IntegrationsColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex"/>
            </div>
                </div>
            </div>
        </div>
    </section>;
}

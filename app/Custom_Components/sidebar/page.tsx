import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"


// Menu items.
const items = [
    {
        title: "Personal",
        url: "#",

    },
    {
        title: "Projects",
        url: "#",

    },
    {
        title: "Experience",
        url: "#",

    },
    {
        title: "Skills",
        url: "#",

    },
    {
        title: "Educsation",
        url: "#",

    },
    {
        title: "Social",
        url: "#",

    },
]


export default function sidebar() {
    return (
        <div>
            <SidebarProvider>
                <Sidebar>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>{items.map((item) =>
                            (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}><span>{item.title}</span></a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                            )}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </Sidebar>
            </SidebarProvider>
        </div>
    )
}
    
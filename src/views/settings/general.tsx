import { Moon, MousePointerClick, SquareDashedMousePointer, Sun } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";

import { useTheme } from "@/components/providers/theme-provider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsGeneralView() {
  const { theme, setTheme } = useTheme();

  const [figmaMode, setFigmaMode] = useLocalStorage<"click" | "drag">("figma-mode", "click");
  const [showGrid, setShowGrid] = useLocalStorage<boolean>("show-grid", true);
  const [showMinimap, setShowMinimap] = useLocalStorage<boolean>("show-minimap", true);

  return (
    <div className="container max-w-3xl space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Настройки</h1>
        <p className="text-muted-foreground text-sm">Управление параметрами приложения и редактора</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full max-w-md">
          <TabsTrigger value="general" className="flex-1">
            Основные
          </TabsTrigger>
          <TabsTrigger value="editor" className="flex-1">
            Редактор
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4 space-y-4">
          <Card>
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-base">Внешний вид</CardTitle>
              <CardDescription className="text-xs">Настройте внешний вид приложения</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-4 px-4 py-3">
              <div className="space-y-2">
                <Label className="text-sm">Тема приложения</Label>
                <div className="flex flex-col space-y-1.5">
                  <RadioGroup
                    value={theme}
                    onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="theme-light" className="h-4 w-4" />
                      <Label htmlFor="theme-light" className="flex items-center text-sm font-normal">
                        <Sun className="h-3.5 w-3.5" />
                        Светлая
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="theme-dark" className="h-4 w-4" />
                      <Label htmlFor="theme-dark" className="flex items-center text-sm font-normal">
                        <Moon className="h-3.5 w-3.5" />
                        Темная
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="theme-system" className="h-4 w-4" />
                      <Label htmlFor="theme-system" className="text-sm font-normal">
                        Системная
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <p className="text-muted-foreground text-xs">Выберите тему оформления интерфейса приложения</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="editor" className="mt-4 space-y-4">
          <Card>
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-base">Редактор нод</CardTitle>
              <CardDescription className="text-xs">Настройте поведение редактора схем</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-4 px-4 py-3">
              <div className="space-y-2">
                <Label className="text-sm">Режим выделения элементов</Label>
                <div className="flex flex-col space-y-1.5">
                  <RadioGroup
                    value={figmaMode}
                    onValueChange={(value) => setFigmaMode(value as "click" | "drag")}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="click" id="mode-click" className="h-4 w-4" />
                      <Label htmlFor="mode-click" className="flex items-center text-sm font-normal">
                        <MousePointerClick className="h-3.5 w-3.5" />
                        Выбор узлов
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="drag" id="mode-drag" className="h-4 w-4" />
                      <Label htmlFor="mode-drag" className="flex items-center text-sm font-normal">
                        <SquareDashedMousePointer className="h-3.5 w-3.5" />
                        Выделение области
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <p className="text-muted-foreground text-xs">Выберите способ выделения элементов в редакторе нод</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm">Автосохранение</Label>
                  <p className="text-muted-foreground text-xs">Автоматически сохранять изменения в схеме</p>
                </div>
                <Switch id="autosave" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm">Сетка редактора</Label>
                  <p className="text-muted-foreground text-xs">Показывать сетку в редакторе нод</p>
                </div>
                <Switch id="grid" defaultChecked={showGrid} onCheckedChange={setShowGrid} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm">Миниатюра схемы</Label>
                  <p className="text-muted-foreground text-xs">Показывать миниатюру схемы в углу редактора</p>
                </div>
                <Switch id="minimap" defaultChecked={showMinimap} onCheckedChange={setShowMinimap} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

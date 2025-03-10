import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DocumentationView() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Документация</h1>
      <Tabs defaultValue="introduction" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="introduction">Введение</TabsTrigger>
          <TabsTrigger value="getting-started">Начало работы</TabsTrigger>
          <TabsTrigger value="tutorials">Обучающие материалы</TabsTrigger>
          <TabsTrigger value="changelog">История изменений</TabsTrigger>
        </TabsList>

        <TabsContent value="introduction">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="getting-started">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="changelog">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-600">Version 1.0.0 - Initial release.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

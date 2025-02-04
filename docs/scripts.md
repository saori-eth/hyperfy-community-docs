# Scripts

## IMPORTANT

As Hyperfy is in alpha, the scripting API is likely to evolve fast with breaking changes.
This means your apps can and will break as you upgrade worlds.
Once scripting is stable we'll move toward a forward compatible model, which will allow apps to be shared/traded with more confidence that they will continue to run correctly.

## Scripting Interface

To open the in world scripting window, right click on a model to inspect it and click script. Save your scripts with `cmd + s` or `ctrl + s` depending on your OS. 

## World Hierarchy

Worlds are made up of the following hierarchy:
```
Worlds contain:
  └─ Entities which include:
      ├─ Players which contain:
      |   └─ Nodes (e.g. avatar, joint) 
      └─ Apps  which contain:
          └─ Nodes (e.g. mesh, collider, rigidbody) 
```

Certain `entity` and `node` attributes within a world can be accesed from the global world API:

- [world](/docs/api/World.md)

## Global Entites

Apps run inside their own secure environment, which allow apps built by many different authors to co-exist in a real-time digital world.

Just as websites run inside a DOM-based environment that provides browser APIs via globals, apps are provided with specific APIs for the global app and player entities:

- [app](/docs/api/entity/App.md)

## Nodes

Apps are made up of a hierarchy of nodes that you can view and modify within the app runtime using scripts. 
Nodes contain certain default attributes that are inherited by all other nodes such as `node.position` or `node.scale`. Information on the standard node attributes can be found in [Node.md](/docs/api/nodes/Node.md)

Other node attributes are based on common standards in [Three.js](https://threejs.org/) with more information found externally below:

- [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
- [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)
- [Euler](https://threejs.org/docs/#api/en/math/Euler)
- [Matrix4](https://threejs.org/docs/#api/en/math/Matrix4)

## Entity Nodes

When a model is added to a scene, a [group node](/docs/api/nodes/Group.md) is created containing a collection of nodes which mirrors your gltf model hierarchy. It is important to be mindful of these naming conventions when working on a model in software like Blender so you can access these mesh nodes like:

`app.get(<mesh-node-name>)` 

If you are importing a model from someplace like [Sketchfab](https://sketchfab.com/) and you don't know the root model name, you can return it with `const id = app.id`. You can then find the id's of sub meshes by traversing the node hierarchy.

### Creating Nodes

Some nodes can/need to be created using `app.create('<node-name>')`. Information on using each node type and thier attributes can be found below:

**Model**
- [Mesh](/docs/api/nodes/Mesh.md)
- [Material](/docs/api/nodes/Material.md)
- [LOD](/docs/api/nodes/LOD.md)

**Interaction**
- [Action](/docs/api/nodes/Action.md)
- [Collider](/docs/api/nodes/Collider.md)
- [RigidBody](/docs/api/nodes/RigidBody.md)

**UI**
- [UI](/docs/api/nodes/UI.md)
- [UIText](/docs/api/nodes/UIText.md)
- [UIViews](/docs/api/nodes/UIView.md)


**Environment**
- [Audio](/docs/api/nodes/Audio.md)

**Generic**
- [Group](/docs/api/nodes/Group.md)
- [Node](/docs/api/nodes/Node.md)

## Examples

[Example](/docs/category/examples) scripts that may help you get started can be found below: 

- [working?](/docs/examples/working.md) - a hello world script using [action](/docs/api/nodes/Action.md) (:

## Lifecycle

TODO: explain the app lifecycle across client and server